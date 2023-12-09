import { Scheduler } from "@aldabil/react-scheduler";
import axios from "axios";
import { forwardRef, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth-context";


const BASE_URL = "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server";

const EVENTS_URL  =  BASE_URL + "/getEvents.php";
const EVENT_URL  =  BASE_URL + "/event.php";



const createUUID = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

const EventScheduler = forwardRef(({ editable }, ref) =>  {
    const auth = useContext(AuthContext);
    const getEvents = () => {
        const events = axios.get(EVENTS_URL, {
          params: {
            username: auth.username
          }
        }).then((response) => {
          const events = response.data.map((event) => {
            return {
              title: event.title,
              start: new Date(event.start),
              end: new Date(event.end),
              event_id: event.event_id
            }
          })
          // console.log(events);
          return events;
        });
        return events

      }

    const addUpdateEvent = (event, type) => {
        console.log(type, event);
        var event_id = '';
        
        if (type === "create") {
          event_id = createUUID();
        } else {
          event_id = event.event_id;
        }
        const new_event = axios.post(EVENT_URL, {
            username: auth.username,
            title: event.title,
            start: event.start,
            end: event.end,
            event_id : event_id
          })
          .then((response) => {
            console.log(response.data);
            return {
              title: response.data.title,
              start: new Date(response.data.start),
              end: new Date(response.data.end),
              event_id: response.data.event_id
            }
          })
          .catch((error) => {
            console.log(error);
          })

          return new_event;
    }

    const deleteEvent = (event_id) => {
        console.log(event_id)
        const deleted_event_id = axios.delete(EVENT_URL, {
          params: {
            event_id : event_id
          }
        })
        .then((response) => {
          console.log(response.data);
          return response.data.event_id;
        })
        .catch((error) => {
          console.log(error);
        })

        return deleted_event_id;
        
    }

    return (
        <Scheduler
            ref={ref}
            deletable={false}
            draggable={false}
            editable={false}
            disableViewNavigator={true}
            getRemoteEvents={getEvents}
            height={300}
            onConfirm={addUpdateEvent}
            onDelete={deleteEvent}
            week={{
            weekDays: [0, 1, 2, 3, 4, 5, 6],
            weekStartOn: 6,
            startHour: 0,
            endHour: 24,
            step: 30,
            }}
            view="week"
        />
    )
})

export default EventScheduler;
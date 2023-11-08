import logo from "../../assets/logo.png";

export default function Footer() {
    return (
        <div className="p-2 md:p-6 border-t">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div>
            <div className="flex flex-row items-center">
              <img
                className="w-8 h-8 md:w-16 md:h-16"
                src={logo}
                alt="Oathopal Logo"
              />
              <p className="text-4xl font-extrabold">Oathopal</p>
            </div>
            <div className="border-gray-700">
            <div className="text-left">
              <p className="text-xl font-semibold">
                &copy; 2023 Oathopal.com. All rights reserved.
              </p>
            </div>
          </div>
        </div>
          <div className="mt-8 md:mt-0">
            <ul className="space-y-4">
              <li className="text-lg font-semibold hover:underline cursor-pointer">
                General
              </li>
              <li className="text-lg font-semibold hover:underline cursor-pointer">
                How it works
              </li>
              <li className="text-lg font-semibold hover:underline cursor-pointer">
                About us
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import UserList from "../components/UserList";
import GroupsJoinedList from "./GroupsJoinedList";
import PromoteUsersList from "./PromoteUsersList";

function PromoteUsersModal({ isOpen, setIsOpen }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="flex min-h-full justify-center p-4 text-center items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md  overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Manage Mentors
                </Dialog.Title>
                <div className=" grid grid-cols-4 gap-3">
                  <div class="px-6 py-4 font-medium text-gray-900 flex-1 text-center">
                    Name
                  </div>
                  <div class="px-6 py-4 font-medium text-gray-900 flex-1 text-center">
                    Role
                  </div>
                  <div class="px-6 py-4 font-medium text-gray-900 flex-1 text-center">
                    Year
                  </div>
                  <div class="px-6 py-4 font-medium text-gray-900 flex-1 text-center">
                    Action
                  </div>
                </div>
                <div className="mt-2">
                  <PromoteUsersList />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default PromoteUsersModal;

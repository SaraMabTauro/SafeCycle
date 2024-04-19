/*import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

const soluciones = [
  {
    name: "Análisis",
    description: "Obtenga una mejor comprensión de su tráfico",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Compromiso",
    description: "Ayuda a mantener un ritmo saludable",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Seguridad",
    description: "Los datos de tu información estarán seguros y protegidos",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integración",
    description: "Conéctese con herramientas externas para mejor experiencia",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automatización",
    description:
      "Si ya tienes una ruta, vuelva a iniciar y tendras un historial",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function Fly() {
    return (
      <div className="bottom-0 left-0 right-0">  
      <Popover className="relative mb-5">
        <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
          <span className="text-lg">Soluciones</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Popover.Button>
  
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {soluciones.map((item) => (
                  <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon className="h-6 w-6 text-gray-600 group-hover:text-cyan-600" aria-hidden="true" />
                    </div>
                    <div>
                      <a href={item.href} className="font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      </div>
    )
  }
*/

import { Fragment, ReactNode } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

interface Solution {
  name: string;
  description: string;
  href: string;
  icon: ReactNode;
}

interface IconWrapperProps {
  icon: ReactNode;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon, className }) => {
  return <div className={className}>{icon}</div>;
};

const soluciones: Solution[] = [
  {
    name: "Análisis",
    description: "Obtenga una mejor comprensión de su tráfico",
    href: "#",
    icon: <ChartPieIcon title="Análisis" />,
  },
  {
    name: "Compromiso",
    description: "Ayuda a mantener un ritmo saludable",
    href: "#",
    icon: <CursorArrowRaysIcon title="Compromiso" />,
  },
  {
    name: "Seguridad",
    description: "Los datos de tu información estarán seguros y protegidos",
    href: "#",
    icon: <FingerPrintIcon title="Seguridad" />,
  },
  {
    name: "Integración",
    description: "Conéctese con herramientas externas para mejor experiencia",
    href: "#",
    icon: <SquaresPlusIcon title="Integración" />,
  },
  {
    name: "Automatización",
    description: "Si ya tienes una ruta, vuelva a iniciar y tendrás un historial",
    href: "#",
    icon: <ArrowPathIcon title="Automatización" />,
  },
];

export default function Fly() {
  return (
    <div className="bottom-0 left-0 right-0">
      <Popover className="relative mb-5">
        <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
          <span className="text-lg">Soluciones</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {soluciones.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                  >
                    <IconWrapper
                      icon={item.icon}
                      className="h-6 w-6 text-gray-600 group-hover:text-cyan-600"                    />
                    <div>
                      <a href={item.href} className="font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

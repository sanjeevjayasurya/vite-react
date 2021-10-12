import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <main class="font-sans bg-white 0 h-screen w-full">
      <div>
        <nav class="font-noto bg-white dark:bg-gray-800">
          <div class="max-w-7xl mx-auto px-8">
            <div class="flex items-center justify-between h-20">
              <div class="w-full justify-between flex items-center">
                <a class="flex-shrink-0" href="/">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M128 32C74.9807 32 32 74.9807 32 128V384C32 437.019 74.9807 480 128 480H384C437.019 480 480 437.019 480 384V128C480 74.9807 437.019 32 384 32H128ZM224 108C177.608 108 140 145.608 140 192C140 238.392 177.608 276 224 276H288C312.301 276 332 295.699 332 320C332 344.301 312.301 364 288 364H168C156.954 364 148 372.954 148 384C148 395.046 156.954 404 168 404H288C334.392 404 372 366.392 372 320C372 273.608 334.392 236 288 236H224C199.699 236 180 216.301 180 192C180 167.699 199.699 148 224 148H344C355.046 148 364 139.046 364 128C364 116.954 355.046 108 344 108H224Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                    <a
                      class="text-gray-800  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      href="/#"
                    >
                      About
                    </a>
                    <a
                      class="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      href="/#"
                    >
                      Experience
                    </a>
                    <a
                      class="text-gray-800  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      href="/#"
                    >
                      Work
                    </a>
                    <a
                      class="text-gray-800  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      href="/#"
                    >
                      Contact
                    </a>
                    <DarkModeToggle />
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="ml-4 flex items-center md:ml-6"></div>
              </div>
              <div class="-mr-2 flex md:hidden">
                <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="h-8 w-8"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                About
              </a>
              <a
                class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                Experience
              </a>
              <a
                class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                Work
              </a>
              <a
                class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
}

export default App;

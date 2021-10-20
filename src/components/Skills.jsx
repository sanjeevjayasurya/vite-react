import { Rating } from "./Rating"

export const Skills = () => {
  return (
    <section className="min-h-screen w-full bg-white dark:bg-gray-800 px-6 md:px-24 xl:px-36 mx-auto">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex w-full justify-center h-screen flex-col ">
          <div>
            <p className="mb-7 font-semibold font-sans text-3xl text-gray-800 dark:text-white">
              Skills
            </p>
            <p className="dark:text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-20">
              <div className="flex flex-col my-3 md:my-5 relative">
                <svg
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  width="40px"
                  height="40px"
                  className="dark:fill-current text-white"
                >
                  <g>
                    <g>
                      <path
                        d="M487.915,3.52C485.888,1.28,483.008,0,480,0H32c-3.029,0-5.888,1.28-7.915,3.52c-2.027,2.219-3.008,5.205-2.709,8.213
			L64.043,438.4c0.405,4.16,3.243,7.723,7.232,9.045l192,64c1.088,0.384,2.24,0.555,3.371,0.555c1.28,0,2.539-0.235,3.776-0.683
			l170.667-64c3.797-1.408,6.464-4.885,6.869-8.917l42.667-426.667C490.923,8.747,489.941,5.739,487.915,3.52z M427.349,429.675
			l-160.917,60.352L84.565,429.397L43.755,21.333h424.427L427.349,429.675z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M394.645,106.667h-256c-3.029,0-5.888,1.28-7.915,3.52c-2.027,2.219-3.008,5.205-2.709,8.213l10.667,106.667
			c0.555,5.44,5.141,9.6,10.624,9.6h211.563L342.379,354.88l-75.947,28.48l-86.549-28.864l-9.451-47.253
			c-1.152-5.76-6.741-9.536-12.544-8.363c-5.76,1.152-9.515,6.763-8.363,12.544l10.667,53.333c0.747,3.755,3.456,6.805,7.083,8.021
			l96,32c1.088,0.384,2.24,0.555,3.371,0.555c1.28,0,2.539-0.235,3.755-0.683l85.333-32c3.605-1.344,6.208-4.544,6.784-8.363
			l21.333-138.667c0.469-3.093-0.427-6.208-2.453-8.576c-2.005-2.368-4.971-3.712-8.085-3.712H158.976L150.443,128h244.203
			c5.888,0,10.667-4.779,10.667-10.667S400.533,106.667,394.645,106.667z"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
                <p className="absolute right-0 top-20  dark:text-white">90%</p>
                <Rating rating={90}/>
              </div>
              <div className="flex flex-col my-3 md:my-5 relative">
                <svg
                  width="40"
                  height="40"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  className="dark:fill-current text-white"
                >
                  <g>
                    <g>
                      <path
                        d="M487.915,3.52C485.888,1.28,483.008,0,480,0H32c-3.029,0-5.888,1.28-7.915,3.52c-2.027,2.219-3.008,5.205-2.709,8.213
			L64.043,438.4c0.405,4.16,3.243,7.723,7.232,9.045l192,64c1.088,0.384,2.24,0.555,3.371,0.555c1.28,0,2.539-0.235,3.776-0.683
			l170.667-64c3.797-1.408,6.464-4.885,6.869-8.917l42.667-426.667C490.923,8.747,489.941,5.739,487.915,3.52z M427.349,429.675
			l-160.917,60.352L84.565,429.397L43.755,21.333h424.427L427.349,429.675z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M402.816,110.485c-2.027-2.411-5.035-3.797-8.171-3.797h-256c-5.888,0-10.667,4.779-10.667,10.667
			s4.779,10.667,10.667,10.667h243.307l-14.827,85.312H149.312c-5.888,0-10.667,4.779-10.667,10.667s4.779,10.667,10.667,10.667
			h214.101l-20.907,120.171l-76.075,28.523l-86.549-28.864l-9.451-47.253c-1.131-5.76-6.699-9.536-12.544-8.363
			c-5.76,1.152-9.515,6.763-8.363,12.544l10.667,53.333c0.747,3.755,3.456,6.805,7.083,8.021l96,32
			c1.088,0.384,2.24,0.555,3.371,0.555c1.28,0,2.539-0.235,3.755-0.661l85.333-32c3.541-1.344,6.123-4.437,6.763-8.171
			l42.667-245.333C405.696,116.075,404.843,112.896,402.816,110.485z"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
                <p className="absolute right-0 top-20 dark:text-white">80%</p>
                <Rating rating={80}/>              
              </div>
              <div className="flex flex-col my-3 md:my-5 relative">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  className="dark:fill-current text-white"
                >
                  <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
                </svg>
                <p className="absolute right-0 top-20 dark:text-white">75%</p>
                <Rating rating={75}/>
              </div>
              <div className="flex flex-col my-3 md:my-5 relative">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  role="img"
                  className="dark:fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z" />
                </svg>
                <p className="absolute right-0 top-20 dark:text-white">60%</p>
                <Rating rating={60}/>
              </div>
              <div className="flex flex-col my-3 md:my-5 relative">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  className="dark:fill-current text-white"
                >
                  <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" />
                </svg>
                <p className="absolute right-0 top-20 dark:text-white">60%</p>
                <Rating rating={60}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

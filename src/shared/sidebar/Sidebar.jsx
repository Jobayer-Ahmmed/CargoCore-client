import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  return (
    <aside className="w-[260px] h-[100vh] bg-cyan-700 p-5 font-medium">
      <div className="h-full flex flex-col justify-between">
        <ul className="flex flex-col">
          <li>
            <NavLink to={``} className="flex items-center pl-4 pr-4 pt-4 pb-4 gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_26287)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.888889 8.88877H6.22222C6.71111 8.88877 7.11111 8.48877 7.11111 7.99988V0.888767C7.11111 0.399878 6.71111 -0.00012207 6.22222 -0.00012207H0.888889C0.4 -0.00012207 0 0.399878 0 0.888767V7.99988C0 8.48877 0.4 8.88877 0.888889 8.88877ZM0.888889 15.9999H6.22222C6.71111 15.9999 7.11111 15.5999 7.11111 15.111V11.5554C7.11111 11.0665 6.71111 10.6665 6.22222 10.6665H0.888889C0.4 10.6665 0 11.0665 0 11.5554V15.111C0 15.5999 0.4 15.9999 0.888889 15.9999ZM9.77778 15.9999H15.1111C15.6 15.9999 16 15.5999 16 15.111V7.99988C16 7.51099 15.6 7.11099 15.1111 7.11099H9.77778C9.28889 7.11099 8.88889 7.51099 8.88889 7.99988V15.111C8.88889 15.5999 9.28889 15.9999 9.77778 15.9999ZM8.88889 0.888767V4.44432C8.88889 4.93321 9.28889 5.33321 9.77778 5.33321H15.1111C15.6 5.33321 16 4.93321 16 4.44432V0.888767C16 0.399878 15.6 -0.00012207 15.1111 -0.00012207H9.77778C9.28889 -0.00012207 8.88889 0.399878 8.88889 0.888767Z"
                    fill="#3A3C3F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_26287">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={``} className="first-navlink">
              <p>
                {" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_26313)">
                    <path
                      d="M6.12625 5.9375L8 5.04994L9.87375 5.9375H12.0637L9.15 4.55731C9.49897 4.24253 9.71875 3.78713 9.71875 3.28125C9.71875 2.49597 9.1894 1.832 8.46875 1.62747V0.9375H8.9375C9.19637 0.9375 9.40625 0.727625 9.40625 0.46875C9.40625 0.209875 9.19637 0 8.9375 0H7.0625C6.80362 0 6.59375 0.209875 6.59375 0.46875C6.59375 0.727625 6.80362 0.9375 7.0625 0.9375H7.53125V2.03125C7.53125 2.29013 7.74112 2.5 8 2.5C8.43078 2.5 8.78125 2.85047 8.78125 3.28125C8.78125 3.71203 8.43078 4.0625 8 4.0625C7.56922 4.0625 7.21875 3.71203 7.21875 3.28125C7.21875 3.02238 7.00887 2.8125 6.75 2.8125C6.49112 2.8125 6.28125 3.02238 6.28125 3.28125C6.28125 3.78713 6.50103 4.24253 6.84997 4.55731L3.93628 5.9375H6.12625Z"
                      fill="#3A3C3F"
                    />
                    <path
                      d="M15.7854 9.30013C15.9192 9.21381 16 9.06547 16 8.90625V7.34375C16 7.08487 15.7901 6.875 15.5312 6.875H0.46875C0.209875 6.875 0 7.08487 0 7.34375V8.90625C0 9.06547 0.0808437 9.21381 0.214625 9.30013L0.96875 9.78666V13.0883L0.214625 13.5749C0.0808437 13.6612 0 13.8095 0 13.9688V15.5312C0 15.7901 0.209875 16 0.46875 16H15.5312C15.7901 16 16 15.7901 16 15.5312V13.9688C16 13.8095 15.9192 13.6612 15.7854 13.5749L15.0312 13.0883V9.78666L15.7854 9.30013ZM3.11159 13.6562C3.11159 13.9151 2.90172 14.125 2.64284 14.125C2.38397 14.125 2.17409 13.9151 2.17409 13.6562V9.21875C2.17409 8.95988 2.38397 8.75 2.64284 8.75C2.90172 8.75 3.11159 8.95988 3.11159 9.21875V13.6562ZM5.25447 13.6562C5.25447 13.9151 5.04459 14.125 4.78572 14.125C4.52684 14.125 4.31697 13.9151 4.31697 13.6562V9.21875C4.31697 8.95988 4.52684 8.75 4.78572 8.75C5.04459 8.75 5.25447 8.95988 5.25447 9.21875V13.6562ZM7.39731 13.6562C7.39731 13.9151 7.18744 14.125 6.92856 14.125C6.66969 14.125 6.45981 13.9151 6.45981 13.6562V9.21875C6.45981 8.95988 6.66969 8.75 6.92856 8.75C7.18744 8.75 7.39731 8.95988 7.39731 9.21875V13.6562ZM9.54019 13.6562C9.54019 13.9151 9.33031 14.125 9.07144 14.125C8.81256 14.125 8.60269 13.9151 8.60269 13.6562V9.21875C8.60269 8.95988 8.81256 8.75 9.07144 8.75C9.33031 8.75 9.54019 8.95988 9.54019 9.21875V13.6562ZM11.683 13.6562C11.683 13.9151 11.4732 14.125 11.2143 14.125C10.9554 14.125 10.7455 13.9151 10.7455 13.6562V9.21875C10.7455 8.95988 10.9554 8.75 11.2143 8.75C11.4732 8.75 11.683 8.95988 11.683 9.21875V13.6562ZM13.8259 13.6562C13.8259 13.9151 13.616 14.125 13.3572 14.125C13.0983 14.125 12.8884 13.9151 12.8884 13.6562V9.21875C12.8884 8.95988 13.0983 8.75 13.3572 8.75C13.616 8.75 13.8259 8.95988 13.8259 9.21875V13.6562Z"
                      fill="#3A3C3F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_26313">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Loads
              </p>
              <IoIosArrowDown />
            </NavLink>
          </li>
          <li>
            <NavLink to={``} className="first-navlink">
              <p>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_26323)">
                    <path
                      d="M8 6.91479C9.50152 6.91479 10.7188 5.69757 10.7188 4.19604C10.7188 2.69452 9.50152 1.47729 8 1.47729C6.49848 1.47729 5.28125 2.69452 5.28125 4.19604C5.28125 5.69757 6.49848 6.91479 8 6.91479Z"
                      fill="#3A3C3F"
                    />
                    <path
                      d="M13.5 6.9148C14.4492 6.9148 15.2188 6.14528 15.2188 5.19605C15.2188 4.24681 14.4492 3.47729 13.5 3.47729C12.5508 3.47729 11.7812 4.24681 11.7812 5.19605C11.7812 6.14528 12.5508 6.9148 13.5 6.9148Z"
                      fill="#3A3C3F"
                    />
                    <path
                      d="M2.5 6.9148C3.44924 6.9148 4.21875 6.14528 4.21875 5.19605C4.21875 4.24681 3.44924 3.47729 2.5 3.47729C1.55076 3.47729 0.78125 4.24681 0.78125 5.19605C0.78125 6.14528 1.55076 6.9148 2.5 6.9148Z"
                      fill="#3A3C3F"
                    />
                    <path
                      d="M4.19344 8.45827C3.51687 7.90396 2.90416 7.97734 2.12187 7.97734C0.951875 7.97734 0 8.92359 0 10.0864V13.4992C0 14.0042 0.412187 14.4148 0.919062 14.4148C3.10737 14.4148 2.84375 14.4544 2.84375 14.3205C2.84375 11.9021 2.55731 10.1287 4.19344 8.45827Z"
                      fill="#3A3C3F"
                    />
                    <path
                      d="M8.74415 7.98976C7.37778 7.87579 6.19012 7.99107 5.16572 8.83663C3.45144 10.2098 3.78134 12.0586 3.78134 14.3204C3.78134 14.9188 4.26822 15.4148 4.87572 15.4148C11.472 15.4148 11.7346 15.6275 12.1257 14.7613C12.254 14.4684 12.2188 14.5615 12.2188 11.7591C12.2188 9.53332 10.2916 7.98976 8.74415 7.98976Z"
                      fill="#3A3C3F"
                    />
                    <path
                      d="M13.8782 7.97726C13.0916 7.97726 12.4823 7.90463 11.8066 8.4582C13.4305 10.1162 13.1563 11.7687 13.1563 14.3204C13.1563 14.4552 12.9375 14.4148 15.0482 14.4148C15.5732 14.4148 16.0001 13.9894 16.0001 13.4666V10.0863C16.0001 8.92351 15.0482 7.97726 13.8782 7.97726Z"
                      fill="#3A3C3F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_26323">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0 0.45752)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Customers
              </p>
              <IoIosArrowDown />
            </NavLink>
            
          </li>
          <li>
            <NavLink to={``} className="first-navlink">
              <p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_26337)">
                    <path
                      d="M13.1096 5.38285L15.2046 4.51509C14.8809 3.85009 14.4677 3.23652 13.981 2.6897L12.3784 4.2923C12.6615 4.62543 12.9075 4.99101 13.1096 5.38285Z"
                      fill="#3A3C3F"
                    />
                    <path
                      d="M2.27445 8.4762H0.00708008C0.241818 12.5184 3.48862 15.7652 7.53086 16V13.7326C4.73656 13.5057 2.5014 11.2705 2.27445 8.4762Z"
                      fill="#3A3C3F"
                    />
                    <path
                      d="M8.46924 13.7327V16C10.3243 15.8923 12.0116 15.1502 13.3175 13.988L11.7149 12.3854C10.8244 13.1421 9.70126 13.6326 8.46924 13.7327Z"
                      fill="#3A3C3F"
                    />
                    <path
                      d="M8 2.26224C9.41534 2.26224 10.7125 2.77701 11.7148 3.62876L13.3174 2.02616C11.9022 0.766581 10.0391 0 8 0C3.74243 0 0.250826 3.34035 0.00708008 7.53789H2.27448C2.51398 4.58879 4.99028 2.26224 8 2.26224Z"
                      fill="#3A3C3F"
                    />
                    <path
                      d="M13.7256 7.5379H15.993C15.9494 6.78692 15.8018 6.06347 15.5645 5.38159L13.4695 6.24939C13.602 6.66078 13.6894 7.09219 13.7256 7.5379Z"
                      fill="#3A3C3F"
                    />
                    <path
                      d="M12.3784 11.7218L13.981 13.3244C15.1433 12.0186 15.8853 10.3312 15.993 8.4762H13.7256C13.6256 9.70822 13.1351 10.8314 12.3784 11.7218Z"
                      fill="#3A3C3F"
                    />
                    <path
                      d="M12.8065 8.00705C12.8065 5.35674 10.6504 3.20056 8.00006 3.20056C5.34975 3.20056 3.1936 5.35674 3.1936 8.00705C3.1936 10.6573 5.34978 12.8135 8.00009 12.8135C10.6504 12.8135 12.8065 10.6573 12.8065 8.00705ZM6.35899 10.5865H5.42066V9.64815H6.35899V10.5865ZM6.35899 8.47621H5.42066V7.53788H6.35899V8.47621ZM6.35899 6.36594H5.42066V5.42762H6.35899V6.36594ZM10.6379 10.5865H7.4725V9.64815H10.6379V10.5865ZM10.6379 8.47621H7.4725V7.53788H10.6379V8.47621ZM10.6379 6.36594H7.4725V5.42762H10.6379V6.36594Z"
                      fill="#3A3C3F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_26337">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Assets
              </p>

              <IoIosArrowDown />
            </NavLink>
          </li>
          <li>
            <NavLink to={``} className="first-navlink">
              <p>
                <svg
                  className=""
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7437 8.10587L14.3796 4.66066C13.9693 4.25053 13.395 4.00444 12.7386 4.00444H7.89754C6.66676 3.92241 5.6001 4.98878 5.6001 6.21921V17.7032C5.6001 18.9336 6.58471 20 7.89754 20H16.1027C17.3335 20 18.4001 19.0157 18.4001 17.7032V9.66441C18.4001 9.09021 18.1539 8.51601 17.7437 8.10587ZM9.53856 10.4847H12.0001C12.3283 10.4847 12.6565 10.7308 12.6565 11.141C12.6565 11.551 12.4103 11.7971 12.0001 11.7971H9.53856C9.21035 11.7971 8.88215 11.551 8.88215 11.141C8.88215 10.7308 9.21035 10.4847 9.53856 10.4847ZM14.4616 15.0783H9.53856C9.21035 15.0783 8.88215 14.8322 8.88215 14.4221C8.88215 14.0119 9.12831 13.7658 9.53856 13.7658H14.4616C14.7899 13.7658 15.118 14.0119 15.118 14.4221C15.118 14.8322 14.7899 15.0783 14.4616 15.0783Z"
                    fill="#3A3C3F"
                  />
                </svg>
                <span className="ml-[-3px]">Documentation</span>
              </p>

              <IoIosArrowDown />
            </NavLink>
          </li>
          <li>
            <NavLink to={``} className="first-navlink">
              <p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_26366)">
                    <path
                      d="M12.8125 8.39062H16V7.54688C16 7.43722 15.9616 7.33103 15.8913 7.24678L14.3288 5.37178C14.2398 5.26491 14.1078 5.20312 13.9688 5.20312H12.8125V8.39062Z"
                      fill="#3A3C3F"
                    />
                    <path
                      d="M12.0938 15.8906C11.2322 15.8906 10.5312 15.1897 10.5312 14.3281C10.5312 13.4666 11.2322 12.7656 12.0938 12.7656C12.9553 12.7656 13.6562 13.4666 13.6562 14.3281C13.6562 15.1897 12.9553 15.8906 12.0938 15.8906Z"
                      fill="#3A3C3F"
                    />
                    <path
                      d="M12.3438 9.32812C12.0849 9.32812 11.875 9.11825 11.875 8.85938V5.20312H10.9375V10.7344C10.9375 10.9932 10.7276 11.2031 10.4688 11.2031H0V13.8594C0 14.1182 0.209875 14.3281 0.46875 14.3281H1.40625C1.40625 12.9496 2.52775 11.8281 3.90625 11.8281C5.28475 11.8281 6.40625 12.9496 6.40625 14.3281H9.59375C9.59375 12.9496 10.7153 11.8281 12.0938 11.8281C13.4722 11.8281 14.5938 12.9496 14.5938 14.3281H15.5312C15.7901 14.3281 16 14.1182 16 13.8594V9.32812H12.3438Z"
                      fill="#3A3C3F"
                    />
                    <path
                      d="M3.90625 15.8906C3.04469 15.8906 2.34375 15.1897 2.34375 14.3281C2.34375 13.4666 3.04469 12.7656 3.90625 12.7656C4.76781 12.7656 5.46875 13.4666 5.46875 14.3281C5.46875 15.1897 4.76781 15.8906 3.90625 15.8906Z"
                      fill="#3A3C3F"
                    />
                    <path
                      d="M7.47381 2.92188C7.49091 3.07584 7.5 3.23219 7.5 3.39062C7.5 5.71684 5.60747 7.60938 3.28125 7.60938C1.95728 7.60938 0.774031 6.99616 0 6.03903V10.2656H10V2.92188H7.47381Z"
                      fill="#3A3C3F"
                    />
                    <path
                      d="M3.28125 0.109375C1.47197 0.109375 0 1.58134 0 3.39062C0 5.19991 1.47197 6.67188 3.28125 6.67188C5.09053 6.67188 6.5625 5.19991 6.5625 3.39062C6.5625 1.58134 5.09053 0.109375 3.28125 0.109375ZM4.21875 3.85938H3.28125C3.02238 3.85938 2.8125 3.6495 2.8125 3.39062V2.45312C2.8125 2.19425 3.02238 1.98438 3.28125 1.98438C3.54012 1.98438 3.75 2.19425 3.75 2.45312V2.92188H4.21875C4.47762 2.92188 4.6875 3.13175 4.6875 3.39062C4.6875 3.6495 4.47762 3.85938 4.21875 3.85938Z"
                      fill="#3A3C3F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_26366">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Carriers
              </p>

              <IoIosArrowDown />
            </NavLink>
          </li>
          <li>
            <NavLink to={``} className="first-navlink">
              <p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_26391)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.5049 7.38272C14.4106 8.38637 15.0858 9.25716 15.5305 10.0379C17.159 12.8973 14.8423 15.8015 11.7397 15.7492C8.63712 15.8015 6.32043 12.8973 7.94893 10.0379C8.39362 9.25716 9.06887 8.38637 9.97456 7.38272C10.0827 7.41697 10.1976 7.4355 10.3168 7.4355H13.1626C13.2818 7.4355 13.3968 7.41697 13.5049 7.38272ZM1.98746 0.25C1.20599 0.25 0.56665 0.889375 0.56665 1.67081V12.0576C0.56665 12.8391 1.20599 13.4784 1.98746 13.4784H7.21959C6.70821 12.2565 6.86293 10.9345 7.51449 9.79047C7.64759 9.55678 7.79359 9.32519 7.94924 9.09637C7.85921 9.03812 7.7994 8.93681 7.7994 8.82197V8.39734C7.7994 8.21744 7.94612 8.07072 8.12603 8.07072H8.71843C8.98321 7.74525 9.25871 7.42844 9.53443 7.12262C9.45302 7.04541 9.38303 6.95628 9.32718 6.85812H8.12603C7.94612 6.85812 7.7994 6.71141 7.7994 6.5315V6.10684C7.7994 5.92694 7.94612 5.78022 8.12603 5.78022H9.30384C9.40534 5.58256 9.56306 5.41819 9.75562 5.30837L9.41618 4.96897C9.20959 4.76237 9.0979 4.49597 9.08096 4.22466H2.46106C2.28115 4.22466 2.13443 4.07794 2.13443 3.89803V2.616C2.13443 2.43609 2.28115 2.28937 2.46106 2.28937H9.6469C9.82681 2.28937 9.97353 2.43609 9.97353 2.616V3.02703C10.204 2.97416 10.4492 2.99175 10.6732 3.08366C10.8247 2.72103 11.1534 2.45753 11.5413 2.38962V1.67081C11.5413 0.889375 10.902 0.25 10.1205 0.25H1.98746ZM10.3169 6.9355C9.96599 6.9355 9.67899 6.64847 9.67899 6.29762C9.67899 5.94681 9.96603 5.65978 10.3169 5.65978H13.1626C13.5134 5.65978 13.8005 5.94681 13.8005 6.29766C13.8005 6.64844 13.5134 6.9355 13.1626 6.9355H10.3169ZM2.76115 5.78022H3.98193C4.16184 5.78022 4.30856 5.92694 4.30856 6.10684V6.53147C4.30856 6.71137 4.16184 6.85809 3.98193 6.85809H2.76115C2.58124 6.85809 2.43453 6.71137 2.43453 6.53147V6.10684C2.43453 5.92694 2.58124 5.78022 2.76115 5.78022ZM5.44359 10.3612C5.26368 10.3612 5.11696 10.5079 5.11696 10.6878V11.1124C5.11696 11.2923 5.26368 11.4391 5.44359 11.4391H6.66437C6.84428 11.4391 6.99099 11.2923 6.99099 11.1124V10.6878C6.99099 10.5079 6.84428 10.3612 6.66437 10.3612H5.44359ZM2.76115 10.3612H3.98193C4.16184 10.3612 4.30856 10.5079 4.30856 10.6878V11.1124C4.30856 11.2923 4.16184 11.4391 3.98193 11.4391H2.76115C2.58124 11.4391 2.43453 11.2923 2.43453 11.1124V10.6878C2.43453 10.5079 2.58124 10.3612 2.76115 10.3612ZM5.44359 8.07069C5.26368 8.07069 5.11696 8.21741 5.11696 8.39731V8.82194C5.11696 9.00184 5.26368 9.14856 5.44359 9.14856H6.66437C6.84428 9.14856 6.99099 9.00184 6.99099 8.82194V8.39731C6.99099 8.21741 6.84428 8.07069 6.66437 8.07069H5.44359ZM2.76115 8.07069H3.98193C4.16184 8.07069 4.30856 8.21741 4.30856 8.39731V8.82194C4.30856 9.00184 4.16184 9.14856 3.98193 9.14856H2.76115C2.58124 9.14856 2.43453 9.00184 2.43453 8.82194V8.39731C2.43453 8.21744 2.58124 8.07069 2.76115 8.07069ZM5.44359 5.78022H6.66437C6.84428 5.78022 6.99099 5.92694 6.99099 6.10684V6.53147C6.99099 6.71137 6.84428 6.85809 6.66437 6.85809H5.44359C5.26368 6.85809 5.11696 6.71137 5.11696 6.53147V6.10684C5.11696 5.92694 5.26368 5.78022 5.44359 5.78022ZM11.707 12.7496C11.5153 12.7446 11.3292 12.6927 11.1809 12.5938C11.0466 12.5044 10.9441 12.3737 10.9012 12.2018C10.8631 12.0467 10.7064 11.9519 10.5513 11.9901C10.3962 12.0282 10.3014 12.1849 10.3396 12.34C10.4205 12.6645 10.6118 12.9099 10.8616 13.0762C11.0322 13.1899 11.2303 13.265 11.4377 13.3016V13.5266C11.4377 13.6867 11.5675 13.8165 11.7277 13.8165C11.8877 13.8165 12.0175 13.6867 12.0175 13.5266V13.3071C12.2696 13.2687 12.5265 13.1766 12.7282 13.0236C12.9706 12.8397 13.1318 12.5764 13.1234 12.223C13.1224 12.1825 13.1201 12.1469 13.1164 12.1165C13.0694 11.7292 12.8599 11.4772 12.5821 11.3095C12.3381 11.1621 12.0455 11.0887 11.7772 11.0447C11.5837 11.0129 11.3799 10.9592 11.2306 10.8617C11.115 10.7862 11.0321 10.6769 11.0243 10.5171C11.0159 10.3442 11.0914 10.2047 11.2103 10.1079C11.3035 10.0322 11.4224 9.97953 11.5513 9.95359C11.6031 9.94316 11.6565 9.93712 11.7104 9.93572C11.7161 9.93606 11.7218 9.93625 11.7276 9.93625C11.7346 9.93625 11.7415 9.936 11.7484 9.9355C11.8196 9.93653 11.8914 9.94569 11.9615 9.96344C12.177 10.0181 12.3732 10.1601 12.4765 10.4062C12.5384 10.5538 12.7083 10.6232 12.8559 10.5613C13.0035 10.4994 13.0729 10.3295 13.011 10.182C12.8291 9.74866 12.4827 9.49828 12.1019 9.40178C12.074 9.39469 12.0458 9.38847 12.0175 9.38312V9.1585C12.0175 8.99841 11.8877 8.86859 11.7277 8.86859C11.5676 8.86859 11.4377 8.99841 11.4377 9.1585V9.38747C11.2181 9.43175 11.0118 9.52447 10.8457 9.65953C10.5904 9.86712 10.4285 10.1685 10.4467 10.5443C10.4651 10.9219 10.6535 11.1752 10.9158 11.3465C11.1445 11.4957 11.4254 11.573 11.6844 11.6155C11.8924 11.6497 12.1145 11.7036 12.2832 11.8055C12.4181 11.887 12.5195 12.0061 12.5412 12.1845C12.5441 12.2083 12.5456 12.2256 12.5459 12.2366C12.5492 12.3785 12.4814 12.4866 12.3794 12.5639C12.2518 12.6607 12.0727 12.7178 11.8935 12.7396C11.8447 12.7455 11.8021 12.7488 11.7659 12.7497L11.7521 12.7499C11.744 12.7492 11.7359 12.7489 11.7276 12.7489C11.7207 12.7488 11.7138 12.7491 11.707 12.7496ZM10.3141 5.15981L9.76974 4.61541C9.51481 4.36047 9.51481 3.94331 9.76974 3.68841C9.98656 3.47156 10.3298 3.43494 10.5878 3.60053C10.6837 3.66203 10.7937 3.67184 10.8989 3.62831C11.004 3.58475 11.0749 3.50003 11.0992 3.38875C11.1634 3.0945 11.4269 2.87241 11.7397 2.87234C12.0469 2.87234 12.3148 3.08887 12.3803 3.38875C12.4046 3.50003 12.4754 3.58475 12.5806 3.62831C12.6858 3.67191 12.7958 3.66203 12.8916 3.60053C13.1451 3.43784 13.4885 3.46719 13.7097 3.68834V3.68841C13.9646 3.94334 13.9646 4.3605 13.7097 4.61541L13.1653 5.15981L13.1626 5.15978H10.3168L10.3141 5.15981Z"
                      fill="#3A3C3F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_26391">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.31665)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Rates
              </p>
              <IoIosArrowDown />
            </NavLink>
            
          </li>
          <li>
            <NavLink to={``} className="flex items-center pl-4 pr-4 pt-4 pb-4 gap-[6px]">
              <svg
                width="20"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.14289 15.4286C7.30069 15.4286 7.4286 15.3007 7.4286 15.1429C7.4286 14.9851 7.30069 14.8572 7.14289 14.8572C6.9851 14.8572 6.85718 14.9851 6.85718 15.1429C6.85718 15.3007 6.9851 15.4286 7.14289 15.4286Z"
                  fill="#3A3C3F"
                />
                <path
                  d="M4.85714 17.1428H8.28569C8.51302 17.1428 8.73104 17.0525 8.89178 16.8918C9.05253 16.731 9.14283 16.513 9.14283 16.2857V14C9.14283 13.7726 9.05253 13.5546 8.89178 13.3939C8.73104 13.2331 8.51302 13.1428 8.28569 13.1428H4.85714C4.62981 13.1428 4.41179 13.2331 4.25105 13.3939C4.09031 13.5546 4 13.7726 4 14V16.2857C4 16.513 4.09031 16.731 4.25105 16.8918C4.41179 17.0525 4.62981 17.1428 4.85714 17.1428ZM7.14284 14.2857C7.31237 14.2857 7.47809 14.3359 7.61904 14.4301C7.76 14.5243 7.86986 14.6582 7.93473 14.8148C7.99961 14.9714 8.01658 15.1438 7.98351 15.31C7.95044 15.4763 7.8688 15.629 7.74893 15.7489C7.62906 15.8688 7.47633 15.9504 7.31006 15.9835C7.14379 16.0166 6.97145 15.9996 6.81483 15.9347C6.65821 15.8698 6.52434 15.76 6.43016 15.619C6.33597 15.4781 6.2857 15.3123 6.2857 15.1428C6.2857 14.9155 6.37601 14.6975 6.53675 14.5367C6.6975 14.376 6.91551 14.2857 7.14284 14.2857Z"
                  fill="#3A3C3F"
                />
                <path
                  d="M18.5713 10.2856H6.57139C6.19265 10.2861 5.82955 10.4368 5.56174 10.7046C5.29393 10.9724 5.14328 11.3355 5.14282 11.7142V12.5713H8.28566C8.6644 12.5718 9.0275 12.7225 9.29531 12.9903C9.56312 13.2581 9.71378 13.6212 9.71423 13.9999V16.2856C9.71378 16.6644 9.56312 17.0275 9.29531 17.2953C9.0275 17.5631 8.6644 17.7137 8.28566 17.7142H5.14282V18.5713C5.14328 18.9501 5.29393 19.3132 5.56174 19.581C5.82955 19.8488 6.19265 19.9994 6.57139 19.9999H18.5713C18.9501 19.9994 19.3132 19.8488 19.581 19.581C19.8488 19.3132 19.9994 18.9501 19.9999 18.5713V11.7142C19.9994 11.3355 19.8488 10.9724 19.581 10.7046C19.3132 10.4368 18.9501 10.2861 18.5713 10.2856ZM16.8571 18.857H15.1428C15.067 18.857 14.9943 18.8269 14.9407 18.7733C14.8872 18.7198 14.8571 18.6471 14.8571 18.5713C14.8571 18.4955 14.8872 18.4229 14.9407 18.3693C14.9943 18.3157 15.067 18.2856 15.1428 18.2856H16.8571C16.9328 18.2856 17.0055 18.3157 17.0591 18.3693C17.1127 18.4229 17.1428 18.4955 17.1428 18.5713C17.1428 18.6471 17.1127 18.7198 17.0591 18.7733C17.0055 18.8269 16.9328 18.857 16.8571 18.857ZM18.5713 18.857H17.9999C17.9241 18.857 17.8515 18.8269 17.7979 18.7733C17.7443 18.7198 17.7142 18.6471 17.7142 18.5713C17.7142 18.4955 17.7443 18.4229 17.7979 18.3693C17.8515 18.3157 17.9241 18.2856 17.9999 18.2856H18.5713C18.6471 18.2856 18.7198 18.3157 18.7734 18.3693C18.8269 18.4229 18.857 18.4955 18.857 18.5713C18.857 18.6471 18.8269 18.7198 18.7734 18.7733C18.7198 18.8269 18.6471 18.857 18.5713 18.857Z"
                  fill="#3A3C3F"
                />
                <path
                  d="M7.17505 9.71443H9.87018C10.5593 8.94705 11.1916 8.13041 11.7619 7.27101C12.1961 6.61187 12.5928 5.92879 12.9502 5.22502L10.0156 4.57903C9.94056 4.56161 9.86201 4.56718 9.79018 4.59503C9.76483 4.60584 9.74146 4.62081 9.72104 4.63931C9.69411 4.66447 9.6733 4.69545 9.66018 4.72988C9.55128 5.16316 9.41996 5.5905 9.26675 6.01016C9.20704 6.17359 9.01704 6.68016 8.73047 7.2673C8.30354 8.13772 7.78192 8.95839 7.17505 9.71443Z"
                  fill="#3A3C3F"
                />
                <path
                  d="M18.0764 9.71433C19.1241 7.91434 19.8724 6.59178 19.9621 6.37978C20.0004 6.30231 20.0081 6.21322 19.9835 6.13035C19.9683 6.08911 19.9443 6.05167 19.9132 6.02063C19.882 5.9896 19.8445 5.96571 19.8032 5.95064L14.449 4.01693C14.3877 3.99574 14.3212 3.99441 14.2591 4.01313C14.197 4.03185 14.1424 4.06967 14.103 4.12122C13.5875 5.33025 12.9634 6.49004 12.2384 7.58634C11.7458 8.32798 11.2082 9.03865 10.6284 9.71433H18.0764Z"
                  fill="#3A3C3F"
                />
              </svg>
              Accounting
            </NavLink>
          </li>
          <li>
            <NavLink to={``} className="first-navlink">
              <p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9375 0.876709H12.3127C12.5815 1.37012 12.7344 1.93562 12.7344 2.53621C12.7344 3.31315 12.1035 3.94521 11.3281 3.94521H4.67188C3.89647 3.94521 3.26562 3.31311 3.26562 2.53621C3.26562 1.93562 3.4185 1.37015 3.68725 0.876709H3.0625C2.28709 0.876709 1.65625 1.5088 1.65625 2.28571V14.591C1.65625 15.3679 2.28709 16 3.0625 16H12.9375C13.7129 16 14.3438 15.3679 14.3438 14.591V2.28571C14.3438 1.50877 13.7129 0.876709 12.9375 0.876709ZM6.35225 13.3158L5.33144 14.3386C5.14841 14.522 4.85159 14.5221 4.66853 14.3386L4.16853 13.8376C3.98547 13.6542 3.98547 13.3569 4.16853 13.1735C4.35156 12.99 4.64838 12.99 4.83144 13.1735L5 13.3423L5.68937 12.6516C5.87241 12.4682 6.16922 12.4682 6.35228 12.6516C6.53531 12.835 6.53531 13.1324 6.35225 13.3158ZM6.35225 10.623L5.33144 11.6458C5.14841 11.8292 4.85159 11.8293 4.66853 11.6458L4.16853 11.1449C3.98547 10.9615 3.98547 10.6641 4.16853 10.4807C4.35156 10.2972 4.64838 10.2972 4.83144 10.4807L5 10.6496L5.68937 9.95886C5.87241 9.77543 6.16922 9.77543 6.35228 9.95886C6.53531 10.1422 6.53531 10.4396 6.35225 10.623ZM5.45644 8.72349C5.27341 8.90693 4.97659 8.90693 4.79353 8.72349C4.61047 8.54008 4.61047 8.24271 4.79353 8.0593L6.48103 6.36849C6.66406 6.18505 6.96088 6.18505 7.14394 6.36849L8.5625 7.78977L9.68084 6.66924H9.625C9.36613 6.66924 9.15625 6.45896 9.15625 6.19958C9.15625 5.94021 9.36613 5.72993 9.625 5.72993C10.9158 5.72993 11.0258 5.67458 11.2023 5.93887C11.3099 6.10005 11.2812 6.15458 11.2812 7.38943C11.2812 7.6488 11.0714 7.85908 10.8125 7.85908C10.5536 7.85908 10.3438 7.6488 10.3438 7.38943V7.33346L8.89394 8.78608C8.71091 8.96949 8.41409 8.96952 8.23103 8.78608L6.8125 7.3648L5.45644 8.72349ZM11.4688 13.9648H7.6875C7.42863 13.9648 7.21875 13.7545 7.21875 13.4951C7.21875 13.2357 7.42863 13.0255 7.6875 13.0255H11.4688C11.7276 13.0255 11.9375 13.2357 11.9375 13.4951C11.9375 13.7545 11.7276 13.9648 11.4688 13.9648ZM11.4688 11.272H7.6875C7.42863 11.272 7.21875 11.0617 7.21875 10.8023C7.21875 10.543 7.42863 10.3327 7.6875 10.3327H11.4688C11.7276 10.3327 11.9375 10.543 11.9375 10.8023C11.9375 11.0617 11.7276 11.272 11.4688 11.272Z"
                    fill="#3A3C3F"
                  />
                  <path
                    d="M9.26562 0H6.73438C5.33862 0 4.20312 1.13775 4.20312 2.53622C4.20312 2.79559 4.413 3.00588 4.67188 3.00588H11.3281C11.587 3.00588 11.7969 2.79559 11.7969 2.53622C11.7969 1.13775 10.6614 0 9.26562 0Z"
                    fill="#3A3C3F"
                  />
                </svg>
                Reporting
              </p>

              <IoIosArrowDown />
            </NavLink>
          </li>
          <li>
            <NavLink to={``} className="first-navlink">
              <p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_26435)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.61438 14.5383C9.61438 13.9853 9.16606 13.537 8.61306 13.537H7.38694C7.12138 13.537 6.86669 13.6425 6.67891 13.8303C6.49113 14.0181 6.38562 14.2728 6.38562 14.5383C6.38562 15.0913 6.83394 15.5396 7.38694 15.5396H8.61306C9.16606 15.5396 9.61438 15.0913 9.61438 14.5383ZM2.10503 11.9564C2.27228 11.9691 2.47463 11.9765 2.67788 11.9646C2.78616 12.5137 3.05516 13.023 3.45669 13.4246C3.98975 13.9576 4.71272 14.2571 5.46656 14.2571H5.84863C5.83178 14.3493 5.82312 14.4434 5.82312 14.5383C5.82312 14.6344 5.83178 14.7284 5.84837 14.8196H5.46656C4.56353 14.8196 3.69747 14.4609 3.05894 13.8223C2.54953 13.3129 2.21819 12.6587 2.10503 11.9564ZM1.81891 11.3578C1.37481 11.283 0.961563 11.0718 0.638969 10.7492C0.229844 10.3401 0 9.78517 0 9.20658V7.87711C0 7.29852 0.229844 6.74361 0.638969 6.33449C1.04809 5.92536 1.603 5.69549 2.18159 5.69549H2.32681C2.55894 2.76561 5.01025 0.460205 8 0.460205C10.9897 0.460205 13.4411 2.76561 13.6732 5.69549H13.8184C14.397 5.69549 14.9519 5.92536 15.361 6.33449C15.7702 6.74361 16 7.29852 16 7.87711V9.20658C16 9.78517 15.7702 10.3401 15.361 10.7492C14.9519 11.1584 14.397 11.3882 13.8184 11.3882H13.1746C12.9076 11.3882 12.6912 11.1717 12.6912 10.9048V6.15139C12.6912 3.56052 10.5909 1.46021 8 1.46021C5.40913 1.46021 3.30881 3.56052 3.30881 6.15139V10.9048C3.30881 11.0933 3.20091 11.2566 3.04347 11.3363C2.61009 11.4867 1.938 11.3779 1.81891 11.3578Z"
                      fill="#3A3C3F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_26435">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Help & Support
              </p>

              <IoIosArrowDown />
            </NavLink>
          </li>
          <li>
            <NavLink to={``} className="first-navlink">
              <p>
                {" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_26450)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.2449 9.52482C14.7007 9.21133 14.3628 8.62731 14.3628 7.99999C14.3628 7.37298 14.7007 6.78896 15.2433 6.47578C15.8002 6.15562 16.0318 5.49038 15.7938 4.89414C15.4956 4.14099 15.0894 3.43753 14.5897 2.80304C14.1914 2.29787 13.4997 2.16557 12.9428 2.48779C12.4002 2.80304 11.7243 2.80399 11.1802 2.49016C10.6376 2.17633 10.3012 1.59136 10.3028 0.96293C10.3028 0.320039 9.84269 -0.213503 9.2065 -0.305518C8.40687 -0.421333 7.59457 -0.42069 6.79176 -0.303148C6.15713 -0.210489 5.69705 0.322747 5.6986 0.964352C5.6986 1.59201 5.36223 2.17664 4.81965 2.49016C4.27544 2.80365 3.60117 2.80301 3.057 2.48809C2.50013 2.16587 1.80839 2.29882 1.41016 2.80399C1.16265 3.11876 0.934172 3.45527 0.732706 3.80478C0.531206 4.15369 0.355096 4.51938 0.205969 4.8911C-0.0336173 5.48828 0.198047 6.15447 0.754914 6.47544C1.29912 6.78862 1.63705 7.37295 1.63705 7.99996C1.63705 8.62697 1.29912 9.21082 0.756505 9.52448C0.199638 9.84467 -0.0319923 10.5096 0.205969 11.1056C0.504258 11.8593 0.910406 12.5628 1.41016 13.1969C1.80839 13.7021 2.50013 13.8344 3.057 13.5121C3.59961 13.1969 4.27548 13.1962 4.81965 13.5098C5.36223 13.8236 5.6986 14.4086 5.6986 15.037C5.69701 15.6797 6.15868 16.2133 6.79331 16.3055C7.19154 16.3631 7.59136 16.3918 7.99114 16.3918C8.39732 16.3918 8.80347 16.3622 9.20803 16.3031C9.84266 16.2102 10.3027 15.6775 10.3027 15.0359C10.3011 14.4079 10.6375 13.8232 11.1801 13.5098C11.7243 13.1963 12.3986 13.1969 12.9428 13.5118C13.4996 13.834 14.1914 13.7014 14.5896 13.1959C14.8371 12.881 15.0656 12.5445 15.267 12.1954C15.467 11.8466 15.6462 11.4808 15.7938 11.1088C16.0334 10.5116 15.8018 9.84528 15.2449 9.52482ZM10.1584 9.24654C9.82682 9.82311 9.28897 10.2358 8.64487 10.4081C8.00231 10.5804 7.3296 10.492 6.75367 10.1588C5.56376 9.4715 5.15443 7.94413 5.8414 6.75341C6.30151 5.95473 7.14238 5.50765 8.00387 5.50765C8.42749 5.50765 8.85429 5.6149 9.24615 5.84115C10.4361 6.52828 10.8454 8.05612 10.1584 9.24654Z"
                      fill="#3A3C3F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_26450">
                      <rect
                        width="17.3333"
                        height="17.3333"
                        fill="white"
                        transform="translate(-0.666748 -0.666748)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Setting
              </p>

              <IoIosArrowDown />
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to={``} className="first-navlink">
              <p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_26459)">
                    <path
                      d="M15.5828 6.92117L13.8884 5.22679C13.75 5.09217 13.5641 5.01746 13.371 5.01882C13.1779 5.02018 12.9931 5.0975 12.8566 5.23406C12.7201 5.37062 12.6428 5.55544 12.6415 5.74853C12.6402 5.94162 12.715 6.12747 12.8496 6.26586L13.7609 7.17711H10.239C10.1408 7.17424 10.043 7.19111 9.95136 7.22673C9.85976 7.26235 9.77623 7.31598 9.70573 7.38446C9.63522 7.45293 9.57918 7.53486 9.5409 7.62539C9.50263 7.71591 9.48291 7.8132 9.48291 7.91148C9.48291 8.00976 9.50263 8.10705 9.5409 8.19758C9.57918 8.2881 9.63522 8.37003 9.70573 8.4385C9.77623 8.50698 9.85976 8.56061 9.95136 8.59623C10.043 8.63185 10.1408 8.64872 10.239 8.64586H13.7937L12.8825 9.55742C12.8143 9.62562 12.7602 9.70659 12.7232 9.79571C12.6863 9.88482 12.6673 9.98034 12.6673 10.0768C12.6673 10.1732 12.6863 10.2688 12.7232 10.3579C12.7602 10.447 12.8143 10.528 12.8825 10.5962C13.0202 10.7339 13.207 10.8113 13.4018 10.8113C13.4983 10.8113 13.5938 10.7923 13.6829 10.7554C13.772 10.7185 13.853 10.6644 13.9212 10.5962L15.5828 8.93461C15.715 8.80237 15.8199 8.64537 15.8915 8.47258C15.9631 8.2998 15.9999 8.1146 15.9999 7.92757C15.9999 7.74055 15.9631 7.55535 15.8915 7.38257C15.8199 7.20978 15.715 7.05278 15.5828 6.92054V6.92117Z"
                      fill="#3A3C3F"
                    />
                    <path
                      d="M11.525 9.58751C11.3381 9.5907 11.159 9.66291 11.0221 9.79024C10.8853 9.91757 10.8004 10.091 10.7837 10.2772C10.7565 10.635 10.7294 10.7553 10.6956 11.0219C10.6466 11.3788 10.482 11.7097 10.2269 11.9641C9.97211 12.2226 9.64022 12.3913 9.28123 12.4447L9.25998 12.4475C9.04123 12.4788 8.83811 12.5063 8.62654 12.5313C8.66779 11.71 8.69405 10.7606 8.70061 9.81845C8.71248 8.26032 8.66936 6.65282 8.58404 5.61532C8.52015 4.88984 8.30479 4.18582 7.95186 3.54876C7.6028 2.92126 7.14905 2.42813 6.67342 2.1672L6.65873 2.15938C6.24405 1.93251 5.8928 1.74032 5.28655 1.4847C5.54467 1.47626 5.79592 1.47095 6.1303 1.47095C7.77811 1.47751 8.36123 1.57657 9.17154 1.69876L9.19154 1.70188C9.54852 1.76276 9.87644 1.93686 10.1269 2.19845C10.3812 2.45776 10.5473 2.79078 10.6012 3.15001C10.6878 3.77782 10.7575 4.49376 10.7994 5.5272C10.8147 5.91657 11.1431 6.23439 11.5425 6.24376C11.9531 6.25314 12.2784 5.94095 12.2597 5.5497C12.2115 4.53345 12.1319 3.78095 12.0278 3.10157C11.9256 2.43688 11.5865 1.78595 11.0872 1.26595C10.5878 0.745947 9.95248 0.38501 9.29061 0.269072L9.2703 0.265635C8.46217 0.13126 7.82655 0.0109473 6.1328 0.00219727C4.43936 0.0121973 3.84373 0.130635 3.03436 0.264385L3.01405 0.268135C2.35217 0.38376 1.7153 0.745635 1.2153 1.2647C0.715297 1.78376 0.376859 2.43563 0.274672 3.10032C0.123109 4.07876 0.0134216 5.61063 0.00185909 7.1072C-0.00970341 8.60376 0.0684216 10.1338 0.204359 11.1091C0.264909 11.5246 0.409405 11.9234 0.629046 12.2813C0.689984 12.4063 0.755609 12.5313 0.825921 12.6506C1.19061 13.2728 1.65905 13.7775 2.14155 14.0606L2.15623 14.0694C2.74436 14.4131 3.21061 14.6909 4.42592 15.21C5.6378 15.7225 6.08217 15.8256 6.64873 15.96L6.6628 15.9634C7.12592 16.0713 7.56311 15.9225 7.90186 15.5522C8.22998 15.1934 8.45154 14.6434 8.52373 14.0025C8.82092 13.9672 9.08623 13.9272 9.37342 13.8825L9.39404 13.8791C10.0687 13.7738 10.715 13.4253 11.2162 12.9181C11.7175 12.4109 12.05 11.7684 12.1415 11.1056C12.1809 10.8188 12.2115 10.6778 12.2422 10.3094C12.2756 9.90845 11.9462 9.57907 11.525 9.58751Z"
                      fill="#3A3C3F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_26459">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Log Out
              </p>

              <IoIosArrowDown />
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

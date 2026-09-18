const iconClass = `
  w-9 h-9
  sm:w-10 sm:h-10
  md:w-12 md:h-12
  lg:w-13 lg:h-13
  xl:w-14 xl:h-14
  object-contain
  transition-transform duration-200 ease-out
  group-hover:scale-110 group-focus-visible:scale-110
`;

function Skills() {
  return (
    <section
      id="skills"
      className="
        min-h-svh w-full
        flex items-center
        px-0 md:px-6
        pt-[70px] pb-12
      "
      style={{ backgroundColor: "#f5a62380" }}
    >
      <div
        className="
          w-full max-w-[1400px] mx-auto

          p-5 py-7
          sm:p-14
          md:p-18
          xl:p-22

          grid grid-cols-1
          lg:grid-cols-[4fr_1fr_2fr]

          gap-6
          lg:gap-8

          bg-[#181818]
          bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:24px_24px]
          md:bg-[size:32px_32px]

          border-y border-white md:border
          md:rounded-lg
        "
      >
        <div className="min-w-0">
          <p className="m-0 mb-1 lg:mb-4 text-center text-base sm:text-lg">
            Web & Software
          </p>

          <div
            className="
              grid grid-cols-4
              place-items-center

              gap-x-3 gap-y-4
              sm:gap-x-0 sm:gap-y-5

              lg:gap-x-0 lg:gap-y-10

              bg-[rgba(255,255,255,0.1)]
              rounded-lg
              py-6 lg:py-10
            "
          >
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="HTML"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2UxNGUxZCIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Im00OCAzOGw4LjYxIDk2LjU5M2gxMTAuNzFsLTMuNzE1IDQxLjQzbC0zNS42NDYgOS42MzhsLTM1LjU3OS05LjYyNGwtMi4zNzktMjYuNjAySDU3Ljk0bDQuNTg1IDUxLjI4MWw2NS40MjcgMTguMTcybDY1LjUxLTE4LjE3Mmw4Ljc4My05OC4wNjFIODUuODI0bC0yLjkyMy0zMi43MWgxMjIuMjM4TDIwOCAzOHoiIC8+CgkJPHBhdGggZmlsbD0iI2ViZWJlYiIgZD0iTTEyOCAzOEg0OGw4LjYxIDk2LjU5M0gxMjh2LTMxLjkzOEg4NS44MjRsLTIuOTIzLTMyLjcxSDEyOHptMCAxNDcuNjQ3bC0uMDQxLjAxNGwtMzUuNTc5LTkuNjI0bC0yLjM3OS0yNi42MDJINTcuOTRsNC41ODUgNTEuMjgxbDY1LjQyNyAxOC4xNzJsLjA0OS0uMDE0eiIgLz4KCTwvZz4KPC9zdmc+Cg=="
                alt="HTML"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                HTML
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="CSS"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzAyNzdiZCIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9IiNlYmViZWIiIGQ9Im01My43NTMgMTAyLjY1MWwyLjg2MiAzMS45NDJoNzEuNDgxdi0zMS45NDJ6TTEyOC4wOTUgMzhINDhsMi45MDQgMzEuOTQyaDc3LjE5MXptMCAxODAuODQxdi0zMy4yMzNsLS4xNC4wMzdsLTM1LjU3NC05LjYwNWwtMi4yNzQtMjUuNDc2SDU4LjA0Mmw0LjQ3NSA1MC4xNTRsNjUuNDMxIDE4LjE2NHoiIC8+CgkJPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE2Ny4zMTggMTM0LjU5M2wtMy43MDggNDEuNDI2bC0zNS42MjUgOS42MTZ2MzMuMjMxbDY1LjQ4My0xOC4xNDhsLjQ4LTUuMzk3bDcuNTA2LTg0LjA5MmwuNzc5LTguNTc4TDIwOCAzOGgtODAuMDE1djMxLjk0Mmg0NS4wMDlsLTIuOTA2IDMyLjcwOWgtNDIuMTAzdjMxLjk0MnoiIC8+Cgk8L2c+Cjwvc3ZnPgo="
                alt="CSS"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                CSS
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="JavaScript"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2YwZGI0ZiIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9IiMzMjMzMzAiIGQ9Im02Ny4zMTIgMjEzLjkzMmwxOS41OS0xMS44NTZjMy43OCA2LjcwMSA3LjIxOCAxMi4zNzEgMTUuNDY1IDEyLjM3MWM3LjkwNSAwIDEyLjg4OS0zLjA5MiAxMi44ODktMTUuMTJ2LTgxLjc5OGgyNC4wNTh2ODIuMTM4YzAgMjQuOTE3LTE0LjYwNiAzNi4yNTktMzUuOTE2IDM2LjI1OWMtMTkuMjQ1IDAtMzAuNDE2LTkuOTY3LTM2LjA4Ny0yMS45OTZtODUuMDctMi41NzZsMTkuNTg4LTExLjM0MWM1LjE1NyA4LjQyMSAxMS44NTkgMTQuNjA3IDIzLjcxNSAxNC42MDdjOS45NjkgMCAxNi4zMjUtNC45ODQgMTYuMzI1LTExLjg1OGMwLTguMjQ4LTYuNTMtMTEuMTctMTcuNTI4LTE1Ljk4bC02LjAxMy0yLjU3OWMtMTcuMzU3LTcuMzg4LTI4Ljg3MS0xNi42NjgtMjguODcxLTM2LjI1OGMwLTE4LjA0NCAxMy43NDgtMzEuNzkyIDM1LjIyOS0zMS43OTJjMTUuMjk0IDAgMjYuMjkyIDUuMzI4IDM0LjE5NiAxOS4yNDdsLTE4LjczMSAxMi4wMjljLTQuMTI1LTcuMzg5LTguNTkxLTEwLjMxLTE1LjQ2NS0xMC4zMWMtNy4wNDYgMC0xMS41MTQgNC40NjgtMTEuNTE0IDEwLjMxYzAgNy4yMTcgNC40NjggMTAuMTM5IDE0Ljc3OCAxNC42MDhsNi4wMTQgMi41NzdjMjAuNDQ5IDguNzY1IDMxLjk2MyAxNy42OTkgMzEuOTYzIDM3LjgwNGMwIDIxLjY1NC0xNy4wMTIgMzMuNTEtMzkuODY3IDMzLjUxYy0yMi4zMzkgMC0zNi43NzQtMTAuNjU0LTQzLjgxOS0yNC41NzQiIC8+Cgk8L2c+Cjwvc3ZnPgo="
                alt="JavaScript"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                JavaScript
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="TypeScript"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzAwN2FjYyIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Im01Ni42MTEgMTI4Ljg0OWwtLjA4MSAxMC40ODRoMzMuMzJ2OTQuNjc5aDIzLjU2OXYtOTQuNjc5aDMzLjMydi0xMC4yODFjMC01LjY4OS0uMTIxLTEwLjQ0My0uMjg0LTEwLjU2NWMtLjEyMi0uMTYyLTIwLjM5OS0uMjQ0LTQ0Ljk4My0uMjAzbC00NC43MzkuMTIyem0xNDkuOTU2LTEwLjc0MWM2LjUwMSAxLjYyNiAxMS40NTkgNC41MTEgMTYuMDEgOS4yMjRjMi4zNTcgMi41MiA1Ljg1MSA3LjExMiA2LjEzNiA4LjIwOWMuMDgxLjMyNS0xMS4wNTMgNy44MDItMTcuNzk4IDExLjk4N2MtLjI0NC4xNjMtMS4yMi0uODk0LTIuMzE3LTIuNTE5Yy0zLjI5MS00Ljc5NS02Ljc0NS02Ljg2OC0xMi4wMjgtNy4yMzNjLTcuNzYxLS41MjktMTIuNzU5IDMuNTM1LTEyLjcxOCAxMC4zMjFjMCAxLjk5MS4yODQgMy4xNjkgMS4wOTcgNC43OTVjMS43MDYgMy41MzUgNC44NzYgNS42NDggMTQuODMyIDkuOTU1YzE4LjMyNiA3Ljg4NCAyNi4xNjggMTMuMDg1IDMxLjA0NSAyMC40OGM1LjQ0NSA4LjI0OSA2LjY2NCAyMS40MTUgMi45NjYgMzEuMjA4Yy00LjA2MyAxMC42NDYtMTQuMTQxIDE3Ljg3OS0yOC4zMjMgMjAuMjc3Yy00LjM4OC43NzItMTQuNzkxLjY1LTE5LjUwNC0uMjAzYy0xMC4yODEtMS44MjktMjAuMDMzLTYuOTA4LTI2LjA0Ny0xMy41NzJjLTIuMzU3LTIuNjAxLTYuOTQ5LTkuMzg3LTYuNjY0LTkuODc1Yy4xMjEtLjE2MiAxLjE3OC0uODEyIDIuMzU2LTEuNTAzYzEuMTM4LS42NSA1LjQ0Ni0zLjEyOSA5LjUwOS01LjQ4Nmw3LjM1NS00LjI2N2wxLjU0NCAyLjI3NmMyLjE1NCAzLjI5MSA2Ljg2NyA3LjgwMiA5LjcxMiA5LjMwNWM4LjE2NyA0LjMwOCAxOS4zODMgMy42OTggMjQuOTA5LTEuMjU5YzIuMzU3LTIuMTU0IDMuMzMyLTQuMzg5IDMuMzMyLTcuNjhjMC0yLjk2Ny0uMzY2LTQuMjY3LTEuOTEtNi41MDJjLTEuOTkxLTIuODQ0LTYuMDU0LTUuMjQyLTE3LjU5NS0xMC4yNGMtMTMuMjA2LTUuNjg5LTE4Ljg5NS05LjIyNC0yNC4wOTYtMTQuODMyYy0zLjAwNy0zLjI1LTUuODUyLTguNDUyLTcuMDMtMTIuOGMtLjk3NS0zLjYxNi0xLjIxOS0xMi42NzgtLjQ0Ny0xNi4zMzVjMi43MjItMTIuNzU5IDEyLjM1My0yMS42NTggMjYuMjUtMjQuM2M0LjUxMS0uODUzIDE0Ljk5NC0uNTI4IDE5LjQyNC41NjkiIC8+Cgk8L2c+Cjwvc3ZnPgo="
                alt="TypeScript"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                TypeScript
              </span>
            </div>

            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="SQL"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgoJPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwY2JmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiPgoJCTxwYXRoIGQ9Ik0yLjUgMTJjMC00LjQ3OCAwLTYuNzE4IDEuMzkxLTguMTA5UzcuNTIxIDIuNSAxMiAyLjVjNC40NzggMCA2LjcxOCAwIDguMTA5IDEuMzkxUzIxLjUgNy41MjEgMjEuNSAxMmMwIDQuNDc4IDAgNi43MTgtMS4zOTEgOC4xMDlTMTYuNDc5IDIxLjUgMTIgMjEuNWMtNC40NzggMC02LjcxOCAwLTguMTA5LTEuMzkxUzIuNSAxNi40NzkgMi41IDEyWiIgLz4KCQk8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik04LjQxNSAxMEExLjUgMS41IDAgMSAwIDcgMTJhMS41IDEuNSAwIDEgMS0xLjQxNSAybTYuOTE1IDFhMS41IDEuNSAwIDAgMS0xLjUtMS41di0zYTEuNSAxLjUgMCAwIDEgMyAwdjNhMS41IDEuNSAwIDAgMS0xLjUgMS41Wm0wIDBsMS41IDEuNU0xNi41IDl2NGMwIC45NDMgMCAxLjQxNC4yOTMgMS43MDdTMTcuNTU3IDE1IDE4LjUgMTUiIC8+Cgk8L2c+Cjwvc3ZnPgo="
                alt="SQL"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                SQL
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="PHP"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzI0MjkzOCIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00OS4xNTggMTAwLjI0NmgyOC40MDhxMTIuNTA3LjEwNiAxOC4xMjYgNy4yMDhxNS42MTggNy4xMDEgMy43MSAxOS4zOThxLS43NDIgNS42MTgtMy4yODYgMTEuMDI0cS0yLjQzOCA1LjQwNi02Ljc4NCA5Ljc1MnEtNS4zIDUuNTExLTExLjM0MiA2Ljk5NnEtNi4wNDMgMS40ODQtMTIuNTA4IDEuNDg0aC0xMi43MmwtNC4wMjggMjAuMTRIMzR6TTYxLjU2IDExMi4zM2wtNi4zNiAzMS44cS42MzYuMTA2IDEuMjcyLjEwNmgxLjQ4NHExMC4xNzcuMTA2IDE2Ljk2LTIuMDE0cTYuNzg0LTIuMjI2IDkuMTE2LTE1LjQ3NnExLjkwOC0xMS4xMy0zLjgxNi0xMi44MjZxLTUuNjE4LTEuNjk1LTE0LjA5OC0xLjU5cS0xLjI3MS4xMDYtMi40MzguMTA2aC0yLjIyNnpNMTE2LjE4NiA4MGgxNC42MjhsLTQuMTM0IDIwLjI0NmgxMy4xNDRxMTAuODExLjIxMyAxNi4xMTIgNC40NTJxNS40MDYgNC4yNCAzLjE4IDE2LjExMmwtNy4xMDIgMzUuMjk4aC0xNC44NGw2Ljc4NC0zMy43MDhxMS4wNTktNS4zLS42MzYtNy41MjZ0LTcuMzE0LTIuMjI2bC0xMS43NjYtLjEwNmwtOC42OTIgNDMuNTY2aC0xNC42Mjh6bTU4LjYzOCAyMC4yNDZoMjguNDA4cTEyLjUwNy4xMDYgMTguMTI2IDcuMjA4cTUuNjE4IDcuMTAxIDMuNzEgMTkuMzk4cS0uNzQyIDUuNjE4LTMuMjg2IDExLjAyNHEtMi40MzggNS40MDYtNi43ODQgOS43NTJxLTUuMyA1LjUxMS0xMS4zNDIgNi45OTZxLTYuMDQzIDEuNDg0LTEyLjUwOCAxLjQ4NGgtMTIuNzJsLTQuMDI4IDIwLjE0aC0xNC43MzR6bTEyLjQwMiAxMi4wODRsLTYuMzYgMzEuOHEuNjM2LjEwNiAxLjI3Mi4xMDZoMS40ODRxMTAuMTc3LjEwNiAxNi45Ni0yLjAxNHE2Ljc4NC0yLjIyNiA5LjExNi0xNS40NzZxMS45MDgtMTEuMTMtMy44MTYtMTIuODI2cS01LjYxOC0xLjY5NS0xNC4wOTgtMS41OXEtMS4yNzIuMTA2LTIuNDM4LjEwNmgtMi4yMjZ6IiAvPgoJPC9nPgo8L3N2Zz4K"
                alt="PHP"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                PHP
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="Python"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzI0MjkzOCIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9InVybCgjU1ZHbHJnWTBjR1UpIiBkPSJNMTI3LjI3OSAyOWMtNTAuNzcyIDAtNDcuNjAyIDIyLjAxOC00Ny42MDIgMjIuMDE4bC4wNTcgMjIuODFoNDguNDUxdjYuODVINjAuNDg5UzI4IDc2Ljk5MiAyOCAxMjguMjIxczI4LjM1NyA0OS40MTQgMjguMzU3IDQ5LjQxNGgxNi45MjR2LTIzLjc3M3MtLjkxMi0yOC4zNTcgMjcuOTA1LTI4LjM1N2g0OC4wNTRzMjYuOTk5LjQzNiAyNi45OTktMjYuMDk0VjU1LjU0NlMxODAuMzM4IDI5IDEyNy4yNzkgMjltLTI2LjcxNiAxNS4zMzlhOC43MSA4LjcxIDAgMCAxIDguNzE3IDguNzE3YTguNzEgOC43MSAwIDAgMS04LjcxNyA4LjcxNmE4LjcxIDguNzEgMCAwIDEtOC43MTYtOC43MTZhOC43MSA4LjcxIDAgMCAxIDguNzE2LTguNzE3IiAvPgoJCTxwYXRoIGZpbGw9InVybCgjU1ZHazczOG9lS3ApIiBkPSJNMTI4LjcyMSAyMjcuOTU4YzUwLjc3MiAwIDQ3LjYwMi0yMi4wMTcgNDcuNjAyLTIyLjAxN2wtLjA1Ny0yMi44MTFoLTQ4LjQ1MXYtNi44NDloNjcuNjk2UzIyOCAxNzkuOTY2IDIyOCAxMjguNzM2cy0yOC4zNTctNDkuNDEzLTI4LjM1Ny00OS40MTNoLTE2LjkyNHYyMy43NzNzLjkxMiAyOC4zNTctMjcuOTA1IDI4LjM1N0gxMDYuNzZzLTI3LS40MzctMjcgMjYuMDkzdjQzLjg2NnMtNC4wOTkgMjYuNTQ2IDQ4Ljk2MSAyNi41NDZtMjYuNzE2LTE1LjMzOWE4LjcxIDguNzEgMCAwIDEtOC43MTctOC43MTZhOC43MSA4LjcxIDAgMCAxIDguNzE3LTguNzE3YTguNzEgOC43MSAwIDAgMSA4LjcxNyA4LjcxN2E4LjcxIDguNzEgMCAwIDEtOC43MTcgOC43MTYiIC8+CgkJPGRlZnM+CgkJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHbHJnWTBjR1UiIHgxPSI0Ny4yMiIgeDI9IjE0Ni4zMzMiIHkxPSI0Ni44OTYiIHkyPSIxNDUuMDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxzdG9wIHN0b3AtY29sb3I9IiMzODdlYjgiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzNjY5OTQiIC8+CgkJCTwvbGluZWFyR3JhZGllbnQ+CgkJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHazczOG9lS3AiIHgxPSIxMDguMDU2IiB4Mj0iMjE0LjQ5MiIgeTE9IjEwOS45MDUiIHkyPSIyMTAuNTIyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CgkJCQk8c3RvcCBzdG9wLWNvbG9yPSIjZmZlMDUyIiAvPgoJCQkJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZjMzMxIiAvPgoJCQk8L2xpbmVhckdyYWRpZW50PgoJCTwvZGVmcz4KCTwvZz4KPC9zdmc+Cg=="
                alt="Python"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                Python
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="Java"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzI0MjkzOCIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMDEuNjM0IDE4Mi42MTlzLTcuNjggNC42NzQgNS4zNDUgNi4wMTFjMTUuNzI4IDIuMDA0IDI0LjA0NCAxLjY2OSA0MS40MDctMS42NjhjMCAwIDQuNjc0IDMuMDA5IDExLjAyIDUuMzQ0Yy0zOS4wNzUgMTYuNjk2LTg4LjQ5Ny0xLjAwMi01Ny43NzItOS42ODdtLTUuMDA5LTIxLjcwNXMtOC4zNSA2LjM0NiA0LjY3NCA3LjY3OWMxNy4wMjggMS42NjkgMzAuMzkxIDIuMDA0IDUzLjQzMy0yLjY2N2MwIDAgMy4wMDkgMy4zNDEgOC4wMTUgNS4wMWMtNDcuMDgzIDE0LjAyNS05OS44NSAxLjMzMy02Ni4xMjItMTAuMDE5em05Mi4xNyAzOC4wN3M1LjY3NiA0LjY3NC02LjM0NiA4LjM1Yy0yMi4zNzYgNi42NzgtOTMuODM5IDguNjg1LTExMy44NzYgMGMtNy4wMDktMy4wMDkgNi4zNDctNy4zNTIgMTAuNjg2LTguMDE1YzQuMzQyLTEuMDAyIDYuNjc4LTEuMDAyIDYuNjc4LTEuMDAyYy03LjY4LTUuMzQ0LTUxLjA5NSAxMS4wMi0yMi4wNDEgMTUuNzI5Yzc5LjgxMyAxMy4wMjcgMTQ1LjYwMy01LjY3NiAxMjQuODk2LTE1LjAyOHptLTgzLjQ4OC02MC43ODFzLTM2LjQwMiA4LjY4NS0xMy4wMjggMTEuNjg3YzEwLjAxOSAxLjMzMyAyOS43MjEgMS4wMDIgNDguMDg5LS4zMzVjMTUuMDI4LTEuMzM0IDMwLjA5LTQuMDA3IDMwLjA5LTQuMDA3cy01LjM0NSAyLjMzOC05LjAxNyA0LjY3NGMtMzcuMDk5IDkuNjkzLTEwOC4yMyA1LjM1MS04Ny44NTgtNC42NjhjMTcuMzctOC4zNSAzMS43MjQtNy4zNTEgMzEuNzI0LTcuMzUxbTY1LjExNiAzNi40MDFjMzcuNDA3LTE5LjM3IDIwLjAzNy0zOC4wNyA4LjAxNS0zNS43MzFjLTMuMDA5LjY2Ny00LjM0MiAxLjMzNC00LjM0MiAxLjMzNHMxLjAwMS0yLjAwNCAzLjM0LTIuNjY3YzIzLjcwOS04LjM1IDQyLjQxMyAyNS4wNDYtNy42NzkgMzguMDdjMCAwIC4zMzUtLjMzNS42NjYtMS4wMDJ6bS02MS40NDQgNTIuNzZjMzYuMDY3IDIuMzM5IDkxLjE2OC0xLjMzNCA5Mi41MDUtMTguMzY5YzAgMC0yLjY2NyA2LjY3OC0yOS43MiAxMS42ODhjLTMwLjcyMiA1LjY3Ni02OC43OTYgNS4wMDktOTEuMTY4IDEuMzMzYzAgMCA0LjY3NCA0LjAwNyAyOC4zODYgNS4zNDR6IiAvPgoJCTxwYXRoIGZpbGw9IiNmNTgyMTkiIGQ9Ik0xNDcuNjg1IDI4czIwLjcwNCAyMS4wMzktMTkuNzAyIDUyLjc2Yy0zMi4zOTQgMjUuNzEyLTcuMzUxIDQwLjQwOCAwIDU3LjEwMWMtMTkuMDM1LTE3LjAyOC0zMi43MjItMzIuMDU5LTIzLjM3Ny00Ni4wODVDMTE4LjMzMSA3MS4wODMgMTU2LjA2MiA2MS4wNjQgMTQ3LjY4NSAyOE0xMzcgMTIzLjg0MmM5LjY4MyAxMS4wMi0yLjY2NyAyMS4wMzktMi42NjcgMjEuMDM5czI0LjcxMS0xMi42ODYgMTMuMzU5LTI4LjM4N2MtMTAuMzU0LTE1LjAyOC0xOC4zNjgtMjIuMzc2IDI1LjA0Ni00Ny40MjVjMCAwLTY4LjQ2IDE3LjAyOC0zNS43MzEgNTQuNzY2eiIgLz4KCTwvZz4KPC9zdmc+Cg=="
                alt="Java"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                Java
              </span>
            </div>

            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="React"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzI0MjkzOCIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9IiMwMGQ4ZmYiIGQ9Ik0xMjguMDAxIDE0Ni45NTFjMTAuMzA0IDAgMTguNjU2LTguMzUzIDE4LjY1Ni0xOC42NTZzLTguMzUyLTE4LjY1Ni0xOC42NTYtMTguNjU2cy0xOC42NTYgOC4zNTMtMTguNjU2IDE4LjY1NnM4LjM1MyAxOC42NTYgMTguNjU2IDE4LjY1NiIgLz4KCQk8cGF0aCBzdHJva2U9IiMwMGQ4ZmYiIHN0cm9rZS13aWR0aD0iOC45MTEiIGQ9Ik0xMjguMDAyIDkwLjM2M2MyNS4wNDggMCA0OC4zMTcgMy41OTQgNjUuODYyIDkuNjM1QzIxNS4wMDMgMTA3LjI3NSAyMjggMTE4LjMwNiAyMjggMTI4LjI5NWMwIDEwLjQwOS0xMy43NzQgMjIuMTI4LTM2LjQ3NSAyOS42NDljLTE3LjE2MiA1LjY4Ni0zOS43NDYgOC42NTQtNjMuNTIzIDguNjU0Yy0yNC4zNzggMC00Ny40NjMtMi43ODYtNjQuODE5LTguNzE3QzQxLjIyNSAxNTAuMzc2IDI4IDEzOC41MDYgMjggMTI4LjI5NWMwLTkuOTA4IDEyLjQxLTIwLjg1NCAzMy4yNTItMjguMTJjMTcuNjEtNi4xNCA0MS40NTMtOS44MTIgNjYuNzQ2LTkuODEyeiIgY2xpcC1ydWxlPSJldmVub2RkIiAvPgoJCTxwYXRoIHN0cm9rZT0iIzAwZDhmZiIgc3Ryb2tlLXdpZHRoPSI4LjkxMSIgZD0iTTk0Ljk4MSAxMDkuNDM4YzEyLjUxNC0yMS42OTggMjcuMjUxLTQwLjA2IDQxLjI0OS01Mi4yNGMxNi44NjQtMTQuNjc3IDMyLjkxNC0yMC40MjUgNDEuNTY2LTE1LjQzNmM5LjAxNyA1LjIgMTIuMjg4IDIyLjk4OCA3LjQ2MyA0Ni40MWMtMy42NDUgMTcuNzA3LTEyLjM1OSAzOC43NTMtMjQuMjM4IDU5LjM1MWMtMTIuMTc5IDIxLjExOC0yNi4xMjQgMzkuNzI0LTM5LjkzMSA1MS43OTJjLTE3LjQ3MSAxNS4yNzItMzQuMzYyIDIwLjc5OS00My4yMDcgMTUuNjk4Yy04LjU4My00Ljk0Ni0xMS44NjUtMjEuMTY3LTcuNzQ3LTQyLjg1MmMzLjQ3OS0xOC4zMjMgMTIuMjEtNDAuODEyIDI0Ljg0MS02Mi43MjN6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIC8+CgkJPHBhdGggc3Ryb2tlPSIjMDBkOGZmIiBzdHJva2Utd2lkdGg9IjguOTExIiBkPSJNOTUuMDEyIDE0Ny41NzhjLTEyLjU0OS0yMS42NzQtMjEuMDkzLTQzLjYxNi0yNC42NTktNjEuODI2Yy00LjI5My0yMS45NDEtMS4yNTgtMzguNzE2IDcuMzg3LTQzLjcyYzkuMDA5LTUuMjE2IDI2LjA1Mi44MzQgNDMuOTM0IDE2LjcxMmMxMy41MiAxMi4wMDQgMjcuNDAzIDMwLjA2MSAzOS4zMTYgNTAuNjM5YzEyLjIxNCAyMS4wOTggMjEuMzY4IDQyLjQ3MyAyNC45MjkgNjAuNDYxYzQuNTA2IDIyLjc2NC44NTkgNDAuMTU3LTcuOTc4IDQ1LjI3MmMtOC41NzQgNC45NjQtMjQuMjY1LS4yOTEtNDAuOTk2LTE0LjY4OWMtMTQuMTM2LTEyLjE2NC0yOS4yNi0zMC45NTktNDEuOTMzLTUyLjg0OVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz4KCTwvZz4KPC9zdmc+Cg=="
                alt="React"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                React
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="Next.js"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2Y0ZjJlZCIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xMjEuNDUxIDI4LjA1NGMtLjQzLjAzOS0xLjc5OS4xNzYtMy4wMzEuMjczYy0yOC40MDYgMi41NjEtNTUuMDE0IDE3Ljg4OS03MS44NjcgNDEuNDQ3QzM3LjE3IDgyLjg3MyAzMS4xNjcgOTcuNzMxIDI4LjkgMTEzLjQ3Yy0uODAxIDUuNDk0LS44OTkgNy4xMTctLjg5OSAxNC41NjVjMCA3LjQ0OS4wOTggOS4wNzIuOSAxNC41NjVjNS40MzQgMzcuNTU2IDMyLjE2IDY5LjExMSA2OC40MDYgODAuODAyYzYuNDkxIDIuMDkyIDEzLjMzMyAzLjUxOSAyMS4xMTQgNC4zNzljMy4wMzEuMzMyIDE2LjEyOS4zMzIgMTkuMTYgMGMxMy40MzEtMS40ODYgMjQuODA5LTQuODA5IDM2LjAzMS0xMC41MzhjMS43Mi0uODc5IDIuMDUzLTEuMTE0IDEuODE4LTEuMzA5Yy0uMTU2LS4xMTgtNy40ODgtOS45NTItMTYuMjg1LTIxLjgzOGwtMTUuOTkyLTIxLjYwM2wtMjAuMDQtMjkuNjU4Yy0xMS4wMjYtMTYuMzA1LTIwLjA5Ny0yOS42MzktMjAuMTc2LTI5LjYzOWMtLjA3OC0uMDE5LS4xNTYgMTMuMTU4LS4xOTUgMjkuMjQ4Yy0uMDU5IDI4LjE3Mi0uMDc4IDI5LjMwNi0uNDMgMjkuOTdjLS41MDguOTU4LS44OTkgMS4zNDktMS43MjEgMS43OGMtLjYyNS4zMTItMS4xNzMuMzcxLTQuMTI1LjM3MWgtMy4zODJsLS45LS41NjdhMy42NSAzLjY1IDAgMCAxLTEuMzEtMS40MjdsLS40MS0uODhsLjA0LTM5LjE5OGwuMDU4LTM5LjIxOGwuNjA2LS43NjNjLjMxMy0uNDEuOTc4LS45MzggMS40NDctMS4xOTJjLjgwMS0uMzkxIDEuMTE0LS40MyA0LjQ5Ni0uNDNjMy45ODkgMCA0LjY1My4xNTYgNS42OSAxLjI5Yy4yOTMuMzEzIDExLjE0MyAxNi42NTcgMjQuMTI1IDM2LjM0NGE4OTEyMiA4OTEyMiAwIDAgMCAzOS40NTIgNTkuNzY1bDE1LjgzNiAyMy45ODlsLjgwMi0uNTI4YzcuMDk2LTQuNjE0IDE0LjYwNC0xMS4xODMgMjAuNTQ3LTE4LjAyNmMxMi42NDktMTQuNTI2IDIwLjgwMi0zMi4yMzggMjMuNTM5LTUxLjEyNGMuODAxLTUuNDkzLjg5OS03LjExNi44OTktMTQuNTY1cy0uMDk4LTkuMDcxLS44OTktMTQuNTY1Yy01LjQzNS0zNy41NTYtMzIuMTYxLTY5LjExLTY4LjQwNy04MC44MDFjLTYuMzkzLTIuMDczLTEzLjE5Ni0zLjUtMjAuODIxLTQuMzZjLTEuODc3LS4xOTYtMTQuOC0uNDEtMTYuNDIyLS4yNTRtNDAuOTM4IDYwLjQ4OWMuOTM4LjQ2OSAxLjcwMSAxLjM2OCAxLjk3NSAyLjMwNmMuMTU2LjUwOS4xOTUgMTEuMzc5LjE1NiAzNS44NzVsLS4wNTkgMzUuMTUybC02LjE5Ny05LjUwMmwtNi4yMTctOS41MDF2LTI1LjU1MmMwLTE2LjUyLjA3OC0yNS44MDcuMTk1LTI2LjI1N2MuMzEzLTEuMDk0Ljk5Ny0xLjk1NCAxLjkzNi0yLjQ2M2MuODAxLS40MSAxLjA5NS0uNDUgNC4xNjQtLjQ1YzIuODk0IDAgMy40MDIuMDQgNC4wNDcuMzkyIiAvPgoJPC9nPgo8L3N2Zz4K"
                alt="Next.js"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                Next.js
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="Electron"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzJiMmUzYSIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9IiM5ZmVhZjkiIGQ9Ik0xMDAuNzY4IDcwLjc3MmMtMjYuMDA1LTQuNzM2LTQ2LjU2Ny4yMjEtNTQuNzYyIDE0LjQxNWMtNi4xMTUgMTAuNTkyLTQuMzY3IDI0LjYzNSA0LjI0IDM5LjY0NmEyLjY3IDIuNjcgMCAwIDAgNC40NjIuMzQyYTIuNjcgMi42NyAwIDAgMCAuNTE5LTIuMDAyYTIuNyAyLjcgMCAwIDAtLjM1NS0uOTkzYy03Ljc1Mi0xMy41MjItOS4yNjEtMjUuNjQxLTQuMjQ3LTM0LjMyNmM2LjgwOC0xMS43OTEgMjUuMTQ4LTE2LjIxMyA0OS4xODctMTEuODM1YTIuNjY3IDIuNjY3IDAgMCAwIC45NTYtNS4yNDdtLTM2Ljk5OSA3Mi4zMDdjMTAuNTE1IDExLjU1NSAyNC4xNzYgMjIuMzk0IDM5Ljc1NiAzMS4zODhjMzcuNzIzIDIxLjc4IDc3Ljg4MyAyNy42MDEgOTcuNjc1IDE0LjEwNmEyLjY2IDIuNjYgMCAwIDAgMS4xNTItMS43MTFhMi42NiAyLjY2IDAgMCAwLTEuMTY1LTIuNzU2YTIuNjY1IDIuNjY1IDAgMCAwLTIuOTkyLjA2MWMtMTcuNzE0IDEyLjA3OC01NS44NjIgNi41NDgtOTIuMDAzLTE0LjMxOGMtMTUuMTE0LTguNzI2LTI4LjM0My0xOS4yMjItMzguNDc4LTMwLjM2YTIuNjcgMi42NyAwIDAgMC0xLjg0OS0uODc2YTIuNjY0IDIuNjY0IDAgMCAwLTIuNzk1IDIuNTQzYTIuNjcgMi42NyAwIDAgMCAuNjk5IDEuOTIzIiAvPgoJCTxwYXRoIGZpbGw9IiM5ZmVhZjkiIGQ9Ik0xOTQuODg2IDEzOS44MzVjMTcuMDI4LTIwLjExNiAyMi45NzMtNDAuMzQ4IDE0Ljc5NS01NC41MTJjLTYuMDE3LTEwLjQyMy0xOC43MzgtMTUuOTI2LTM1LjY0NS0xNi4xNDZhMi42NjYgMi42NjYgMCAwIDAtMS45MiA0LjUxNGEyLjY3IDIuNjcgMCAwIDAgMS44NTEuODE5YzE1LjIwNS4xOTggMjYuMTY1IDQuOTM5IDMxLjA5NiAxMy40OGM2Ljc5MiAxMS43NjUgMS40OSAyOS44MDctMTQuMjQ4IDQ4LjM5OWEyLjY2IDIuNjYgMCAwIDAtLjY0MyAxLjk1MmMuMDI3LjM1Mi4xMjQuNjk0LjI4NSAxLjAwOGEyLjY1IDIuNjUgMCAwIDAgMS41NjggMS4zMjhjLjMzNy4xMDcuNjkxLjE0NiAxLjA0Mi4xMTRhMi43IDIuNyAwIDAgMCAxLjAwNS0uMjk2Yy4zMTMtLjE2NC41ODktLjM4OC44MTQtLjY2TTE1MS4xMjUgNzEuNjZjLTE1LjM5NiAzLjI5OS0zMS43ODQgOS43NDktNDcuNTIyIDE4LjgzNWMtMzguOTQyIDIyLjQ4My02NC4zNDUgNTUuNjM2LTYwLjgxNyA3OS42NzVhMi42NiAyLjY2IDAgMCAwIDEuMDM4IDEuNzc1YTIuNjYgMi42NiAwIDAgMCAyLjk4LjE1NWEyLjY2IDIuNjYgMCAwIDAgMS4yMTctMS42NTdhMi43IDIuNyAwIDAgMCAuMDQyLTEuMDQ4Yy0zLjEzMy0yMS4zNDQgMjAuOTQ3LTUyLjc2OSA1OC4yMDctNzQuMjgxYzE1LjI2Ny04LjgxNSAzMS4xMzUtMTUuMDYgNDUuOTcyLTE4LjIzOWEyLjY3IDIuNjcgMCAwIDAgMS42NzQtNC4xNGEyLjY4IDIuNjggMCAwIDAtMS43NC0xLjEwNmEyLjcgMi43IDAgMCAwLTEuMDUxLjAzMSIgLz4KCQk8cGF0aCBmaWxsPSIjOWZlYWY5IiBkPSJNODguMDM2IDE4Ni44MzVjOC45MDQgMjQuODYgMjMuNDY5IDQwLjE2NyAzOS44NDcgNDAuMTY3YzExLjk0NSAwIDIyLjk5Ni04LjE0MyAzMS42MTQtMjIuNDc4YTIuNjcgMi42NyAwIDAgMCAuMzI3LTIuMDMzYTIuNjYgMi42NiAwIDAgMC0zLjI1Ni0xLjk1N2EyLjY4IDIuNjggMCAwIDAtMS42NDIgMS4yNDJjLTcuNzQ1IDEyLjg4My0xNy4yNTggMTkuODkyLTI3LjA0MyAxOS44OTJjLTEzLjYwNSAwLTI2LjU5Ni0xMy42NTItMzQuODI1LTM2LjYzYTIuNjYgMi42NiAwIDAgMC0xLjM2NC0xLjU1MmEyLjY2IDIuNjYgMCAwIDAtMi45NjYuNDMyYTIuNjggMi42OCAwIDAgMC0uODY0IDEuODc3Yy0uMDEyLjM1NS4wNDcuNzA5LjE3MyAxLjA0em04MS4zMjItNC44NjNjNC42MS0xNC43MjggNy4wODUtMzEuNzE4IDcuMDg1LTQ5LjQyM2MwLTQ0LjE3OS0xNS40NjMtODIuMjYzLTM3LjQ4Ny05Mi4wNDJhMi42NjcgMi42NjcgMCAwIDAtMi4xNjQgNC44NzRjMTkuNjQzIDguNzIzIDM0LjMxNyA0NC44NjYgMzQuMzE3IDg3LjE2OGMwIDE3LjE3Ny0yLjM5NyAzMy42My02Ljg0IDQ3LjgzYTIuNjcgMi42NyAwIDAgMCAuODE2IDIuODc0YTIuNjc1IDIuNjc1IDAgMCAwIDIuOTcxLjMxM2EyLjY3IDIuNjcgMCAwIDAgMS4zMDMtMS41OTR6bTUwLjIyNC0yLjYxMmMwLTcuMDQ5LTUuNzE0LTEyLjc2My0xMi43NjMtMTIuNzYzcy0xMi43NjMgNS43MTQtMTIuNzYzIDEyLjc2M3M1LjcxNCAxMi43NjMgMTIuNzYzIDEyLjc2M3MxMi43NjMtNS43MTQgMTIuNzYzLTEyLjc2M20tNS4zMzMgMGMwIC45NzYtLjE5MiAxLjk0Mi0uNTY2IDIuODQzYTcuNDIgNy40MiAwIDAgMS00LjAyMSA0LjAyMmE3LjQzMiA3LjQzMiAwIDAgMS0xMC4yNzMtNi44NjVhNy40MzIgNy40MzIgMCAwIDEgMTIuNjg0LTUuMjU0YTcuNDMgNy40MyAwIDAgMSAyLjE3NiA1LjI1NE00OC43NjMgMTkyLjEyM2M3LjA1IDAgMTIuNzY0LTUuNzE0IDEyLjc2NC0xMi43NjNzLTUuNzE1LTEyLjc2My0xMi43NjQtMTIuNzYzUzM2IDE3Mi4zMTEgMzYgMTc5LjM2czUuNzE1IDEyLjc2MyAxMi43NjMgMTIuNzYzbTAtNS4zMzNhNy40MzEgNy40MzEgMCAwIDEtNS4yNTQtMTIuNjg0YTcuNDMxIDcuNDMxIDAgMCAxIDEyLjY4NCA1LjI1NGE3LjQzIDcuNDMgMCAwIDEtNy40MyA3LjQzIiAvPgoJCTxwYXRoIGZpbGw9IiM5ZmVhZjkiIGQ9Ik0xMjcuODgzIDUzLjUyNmM3LjA0OSAwIDEyLjc2My01LjcxNCAxMi43NjMtMTIuNzYzUzEzNC45MzIgMjggMTI3Ljg4MyAyOHMtMTIuNzYzIDUuNzE0LTEyLjc2MyAxMi43NjNzNS43MTQgMTIuNzYzIDEyLjc2MyAxMi43NjNtMC01LjMzM2E3LjQzIDcuNDMgMCAxIDEgMC0xNC44NjFhNy40MyA3LjQzIDAgMCAxIDAgMTQuODYxbTEuOTQ5IDkzLjM4MmMtNC45ODUgMS4wNzctOS44OTYtMi4wOTEtMTAuOTc1LTcuMDc2YTkuMjMzIDkuMjMzIDAgMCAxIDcuMDc2LTEwLjk3NmM0Ljk4NS0xLjA3NyA5Ljg5NiAyLjA5MSAxMC45NzYgNy4wNzZjMS4wNzcgNC45ODUtMi4wOTEgOS44OTctNy4wNzcgMTAuOTc2IiAvPgoJPC9nPgo8L3N2Zz4K"
                alt="Electron"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                Electron
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="MySQL"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzI0MjkzOCIgcng9IjYwIiAvPgoJCTxnIGNsaXAtcGF0aD0idXJsKCNTVkd2amZkMGRXcCkiPgoJCQk8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMDMuODAxIDE3OC4yMWMtOS43OS0uMjcyLTE3LjM4NS43MzEtMjMuNzUgMy40MDljLTEuODMzLjczNi00Ljc3NC43MzYtNS4wMTYgMy4wNDNjLjk4Ljk2OCAxLjA5OCAyLjU1MiAxLjk1NyAzLjg5NGMxLjQ2NyAyLjQzNSA0LjA0MSA1LjcxNSA2LjM2NSA3LjQxN2w3LjgzNCA1LjU5OGM0Ljc3NCAyLjkxNyAxMC4xNiA0LjYyMiAxNC44MTEgNy41NDJjMi42OTQgMS43MDQgNS4zODYgMy44OTQgOC4wOCA1LjcyMWMxLjM3Mi45NzMgMi4yMDMgMi41NTggMy45MTggMy4xNjN2LS4zNjhjLS44NTYtMS4wOTEtMS4xMDMtMi42NzItMS45NTYtMy44OTRsLTMuNjc3LTMuNTI2Yy0zLjU0Ny00Ljc0NC03Ljk1Ny04Ljg4NC0xMi43MzEtMTIuMjg3Yy0zLjkxOC0yLjY3Ny0xMi40ODQtNi4zMjYtMTQuMDc2LTEwLjgyNWwtLjI0MS0uMjczYzIuNjg5LS4yNzIgNS44NzItMS4yMTkgOC40NDUtMS45NDljNC4xNjUtMS4wOTEgNy45NTctLjg1MSAxMi4yMzgtMS45NDVsNS44OC0xLjcwNHYtMS4wOTFjLTIuMjA0LTIuMTg5LTMuNzk1LTUuMTEtNi4xMTktNy4xNzZjLTYuMjQyLTUuMzUzLTEzLjEwMi0xMC41ODYtMjAuMjAzLTE0Ljk2NWMtMy43OTQtMi40MzItOC42OTItNC4wMTctMTIuNzMxLTYuMDgxYy0xLjQ3My0uNzMxLTMuOTE4LTEuMDk2LTQuNzc0LTIuMzEyYy0yLjIwOS0yLjY3Mi0zLjQzLTYuMjA0LTUuMDIxLTkuMzY5bC0xMC4wMzctMjEuMTY4Yy0yLjIwMy00Ljc0NS0zLjU1My05LjQ5LTYuMjQyLTEzLjg2OWMtMTIuNjExLTIwLjY4My0yNi4zMjQtMzMuMjEyLTQ3LjM4LTQ1LjUwMmMtNC41MjctMi41NTUtOS45MTMtMy42NTQtMTUuNjQtNC45OWwtOS4xOC0uNDljLTEuOTYyLS44NTEtMy45MTktMy4xNjQtNS42MzMtNC4yNmMtNi45NzgtNC4zOC0yNC45NzQtMTMuODY4LTMwLjEyLTEuMzYzYy0zLjMwNSA3LjkwNyA0Ljg5OSAxNS42OTIgNy42ODQgMTkuNzA5YzIuMDg1IDIuNzk4IDQuNzc0IDUuOTYgNi4yNDcgOS4xMjRjLjgyMyAyLjA2NyAxLjA5OCA0LjI1OSAxLjk1NyA2LjQ0OWMxLjk1NiA1LjM1MiAzLjc5NCAxMS4zMTYgNi4zNjUgMTYuMzA2YzEuMzcyIDIuNTU1IDIuODEzIDUuMjM1IDQuNTI3IDcuNTQ1Yy45OCAxLjM2MyAyLjY5NSAxLjk0NyAzLjA2IDQuMTM2Yy0xLjcxNSAyLjQzNS0xLjgzMyA2LjA4MS0yLjgxMyA5LjEyN2MtNC40MDkgMTMuNzQ4LTIuNjk0IDMwLjc4IDMuNTQ4IDQwLjkwMmMxLjk2MiAzLjA0IDYuNTg1IDkuNzM0IDEyLjg1OCA3LjE3N2M1LjUwOS0yLjE5IDQuMjgtOS4xMjQgNS44NzEtMTUuMjA4Yy4zNy0xLjQ1OC4xMjQtMi40MzIuODU2LTMuNDA4di4yNzNsNS4wMjEgMTAuMDk3YzMuNzk1IDUuOTYxIDEwLjQwOCAxMi4xNjcgMTUuOTE0IDE2LjMwNmMyLjkzNiAyLjE5IDUuMjYzIDUuOTY0IDguOTM0IDcuM3YtLjM2OGgtLjI0MWMtLjczNi0xLjA5MS0xLjgzOS0xLjU4Mi0yLjgxOC0yLjQzM2MtMi4yMDMtMi4xODktNC42NTEtNC44NjctNi4zNjYtNy4yOTljLTUuMTM5LTYuODEyLTkuNjY2LTE0LjM1Ny0xMy43MDgtMjIuMTQyYy0xLjk2MS0zLjc3MS0zLjY3Ni03LjkwOC01LjI2Mi0xMS42NzljLS43NDEtMS40NjEtLjc0MS0zLjY1NC0xLjk2Mi00LjM3OWMtMS44MzkgMi42NzItNC41MjcgNC45OS01Ljg4IDguMjczYy0yLjMyNyA1LjIzLTIuNTY4IDExLjY3OS0zLjQyNCAxOC4zNzFjLS40OTQuMTIyLS4yNzUgMC0uNDk0LjI3MmMtMy45MTMtLjk3LTUuMjYzLTQuOTktNi43My04LjM5M2MtMy42NzItOC42MzgtNC4yODctMjIuNTA3LTEuMTA0LTMyLjQ4NGMuODU2LTIuNTU1IDQuNTMzLTEwLjU4NSAzLjA2NS0xMy4wMThjLS43NC0yLjMxMi0zLjE4My0zLjY0OC00LjUzMy01LjQ3NWMtMS41OTEtMi4zMTItMy4zLTUuMjMtNC40MDMtNy43ODVjLTIuOTM2LTYuODE3LTQuNDA0LTE0LjM1Ny03LjU5LTIxLjE3Yy0xLjQ3My0zLjE2NC00LjA0MS02LjQ1LTYuMTI0LTkuMzY3Yy0yLjMyNy0zLjI4Ni00Ljg5Mi01LjU5OS02LjczLTkuNDljLS42MTItMS4zNjMtMS40NjgtMy41MjgtLjQ4OS00Ljk5Yy4yNDItLjk3My43MzUtMS4zNjMgMS43MS0xLjU4MWMxLjU5LTEuMzY0IDYuMTI0LjM2NSA3LjcxNSAxLjA5YzQuNTI3IDEuODI3IDguMzIyIDMuNTI5IDEyLjExNyA2LjA4MWMxLjcxNSAxLjIxNiAzLjU1MyAzLjUyOSA1Ljc1NiA0LjE0aDIuNTc0YzMuOTE4Ljg1IDguMzIyLjI3MiAxMS45OSAxLjM2M2M2LjQ5IDIuMDcyIDEyLjM2NCA1LjExIDE3LjYzMiA4LjM5OGMxNi4wMzUgMTAuMDk4IDI5LjI2IDI0LjQ1NCAzOC4xOTMgNDEuNjExYzEuNDY4IDIuNzk4IDIuMDggNS4zNTMgMy40MyA4LjI3M2MyLjU3NCA1Ljk2NCA1Ljc1NyAxMi4wNDUgOC4zMjIgMTcuODg4YzIuNTc0IDUuNzE4IDUuMDIxIDExLjU2MiA4LjY5MyAxNi4zMDZjMS44MzggMi41NTUgOS4xOCAzLjg5MSAxMi40ODQgNS4yM2MyLjQ1IDEuMDkxIDYuMjQyIDIuMDczIDguNDUxIDMuNDA5YzQuMTU5IDIuNTU1IDguMzIyIDUuNDc1IDEyLjIzNyA4LjI3M2MxLjk1NiAxLjQ1NiA4LjA4MSA0LjQ5OSA4LjQ0NSA2LjkyNnpNNzguOTU4IDcyLjQ4N2ExOS42IDE5LjYgMCAwIDAtNS4wMTUuNjA4di4yNzNoLjI0MWMuOTggMS45NDcgMi42OTUgMy4yODYgMy45MTggNC45OWwyLjgxOCA1Ljg0bC4yNDItLjI3MmMxLjcxNC0xLjIxNiAyLjU3My0zLjE2MyAyLjU3My02LjA4Yy0uNzM1LS44NTEtLjg1Ni0xLjcwNS0xLjQ2OC0yLjU1NmMtLjczNS0xLjIxNi0yLjMyNi0xLjgyNy0zLjMwOS0yLjc5N3oiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz4KCQk8L2c+CgkJPGRlZnM+CgkJCTxjbGlwUGF0aCBpZD0iU1ZHdmpmZDBkV3AiPgoJCQkJPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTM4IDM4aDE4MHYxODBIMzh6IiAvPgoJCQk8L2NsaXBQYXRoPgoJCTwvZGVmcz4KCTwvZz4KPC9zdmc+Cg=="
                alt="MySQL"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                MySQL
              </span>
            </div>

            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="Sass"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2NkNjc5OSIgcng9IjYwIiAvPgoJCTxnIGNsaXAtcGF0aD0idXJsKCNTVkcyVjB2SFFSdykiPgoJCQk8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjAwLjEwNyAxMzkuMTYzYy02Ljk3NC4wMzYtMTMuMDM0IDEuNzE2LTE4LjEwOSA0LjE5OGMtMS44NjItMy42ODctMy43MjQtNi45NzMtNC4wNTMtOS4zODNjLS4zNjUtMi44MTEtLjgwMy00LjUyNy0uMzY1LTcuODg2czIuNDEtOC4xNDEgMi4zNzMtOC41MDZzLS40MzgtMi4wODEtNC40NTQtMi4xMThzLTcuNDg0Ljc2Ny03Ljg4NiAxLjgyNmMtLjQwMiAxLjA1OC0xLjE2OCAzLjQ2OC0xLjY3OSA1Ljk1MWMtLjY5NCAzLjY1MS04LjAzMyAxNi42ODUtMTIuMjMxIDIzLjUxMmMtMS4zNTEtMi42NjUtMi41MTktNS4wMDItMi43NzUtNi44NjRjLS4zNjUtMi44MTEtLjgwMy00LjUyNy0uMzY1LTcuODg2czIuNDEtOC4xNDIgMi4zNzMtOC41MDdzLS40MzgtMi4wODEtNC40NTQtMi4xMTdzLTcuNDg1Ljc2Ni03Ljg4NiAxLjgyNWMtLjQwMiAxLjA1OS0uODQgMy41NDItMS42OCA1Ljk1MWMtLjgzOSAyLjQxLTEwLjU4NyAyNC4xNy0xMy4xNDMgMjkuNzkyYTE2OCAxNjggMCAwIDEtMy4yNDkgNi43NTRzLS4wMzcuMTEtLjE0Ni4yOTJhOTEgOTEgMCAwIDEtMS4wOTYgMi4wODF2LjAzN2MtLjU0Ny45ODYtMS4xMzIgMS44OTgtMS40MjQgMS44OThjLS4yMTkgMC0uNjItMi42MjguMDczLTYuMjA2YzEuNDYxLTcuNTU4IDQuOTI5LTE5LjMxNCA0Ljg5My0xOS43MTVjMC0uMjE5LjY1Ny0yLjI2NC0yLjI2NC0zLjMyM2MtMi44NDgtMS4wNTktMy44Ny42OTQtNC4xMjYuNjk0Yy0uMjU1IDAtLjQzOC42MjEtLjQzOC42MjFzMy4xNzctMTMuMjE3LTYuMDYtMTMuMjE3Yy01Ljc2OSAwLTEzLjcyOCA2LjMxNi0xNy42NyAxMi4wMTJhNTAwMyA1MDAzIDAgMCAwLTEzLjQzNyA3LjMzOGMtMi4xNTMgMS4yMDUtNC4zOCAyLjQxLTYuNDYyIDMuNTQyYy0uMTQ2LS4xNDYtLjI5Mi0uMzI5LS40MzgtLjQ3NWMtMTEuMTcyLTExLjkzOS0zMS44MzYtMjAuMzcyLTMwLjk2LTM2LjRjLjMyOS01Ljg0MiAyLjMzNy0yMS4xNzYgMzkuNjg2LTM5Ljc5NmMzMC43NDEtMTUuMTUxIDU1LjIwMy0xMC45NTMgNTkuNDM4LTEuNjQzYzYuMDYgMTMuMjktMTMuMTA3IDM3Ljk3LTQ0Ljg3IDQxLjU0OGMtMTIuMTIyIDEuMzUxLTE4LjQ3NC0zLjMyMi0yMC4wOC01LjA3NGMtMS42OC0xLjgyNi0xLjkzNi0xLjkzNS0yLjU1Ny0xLjU3Yy0xLjAyMi41NDctLjM2NSAyLjE5IDAgMy4xMzljLjk1IDIuNDgzIDQuODU2IDYuODY0IDExLjQ2NCA5LjAxOGM1Ljg0MiAxLjg5OSAyMC4wNDQgMi45NTggMzcuMjQtMy42ODdjMTkuMjQxLTcuNDQ4IDM0LjI4My0yOC4xNSAyOS44NjUtNDUuNDkxYy00LjQxNy0xNy41OTgtMzMuNjI1LTIzLjQwMy02MS4yNjMtMTMuNTgyYy0xNi40MyA1Ljg0Mi0zNC4yNDYgMTUuMDQyLTQ3LjA2MSAyNy4wMTdjLTE1LjIyNSAxNC4yNC0xNy42MzQgMjYuNjE2LTE2LjY0OCAzMS44YzMuNTQxIDE4LjQwMSAyOC45MTUgMzAuMzc2IDM5LjA2NSAzOS4yNDhjLS41MTEuMjkyLS45ODYuNTQ4LTEuMzg3Ljc2N2MtNS4wNzUgMi41MTktMjQuNDI1IDEyLjYzMi0yOS4yNDUgMjMuMzNjLTUuNDc2IDEyLjEyMS44NzcgMjAuODEgNS4wNzUgMjEuOTc4YzEzLjAzNCAzLjYxNSAyNi40MzMtMi44ODQgMzMuNjI2LTEzLjYxOHM2LjMxNi0yNC42OCAyLjk5My0zMS4wNjlhLjguOCAwIDAgMC0uMTQ2LS4yMTljMS4zMTUtLjc2NyAyLjY2NS0xLjU3IDMuOTgtMi4zMzdhMTk2IDE5NiAwIDAgMSA3LjMzOC00LjEyNmMtMS4yNDEgMy4zOTYtMi4xNTQgNy40NDgtMi41OTIgMTMuMjljLS41NDcgNi44NjQgMi4yNjQgMTUuNzcyIDUuOTUxIDE5LjI3N2MxLjY0MyAxLjUzMyAzLjU3OCAxLjU3IDQuODIgMS41N2M0LjMwOCAwIDYuMjQzLTMuNTc4IDguMzk3LTcuODEzYzIuNjI4LTUuMTg1IDUuMDAyLTExLjIwOSA1LjAwMi0xMS4yMDlzLTIuOTU4IDE2LjI4NCA1LjA3NCAxNi4yODRjMi45MjEgMCA1Ljg3OC0zLjc5NyA3LjE5My01LjczMnYuMDM2cy4wNzMtLjEwOS4yMTktLjM2NWMuMjkyLS40NzUuNDc0LS43NjcuNDc0LS43Njd2LS4wNzNjMS4xNjktMi4wNDQgMy43OTctNi42ODEgNy43MDQtMTQuMzg1YzUuMDM4LTkuOTMgOS44OTQtMjIuMzQzIDkuODk0LTIyLjM0M3MuNDM4IDMuMDMgMS45MzUgOC4wNjhjLjg3NiAyLjk1OCAyLjcwMiA2LjIwNyA0LjE2MiA5LjM0N2MtMS4xNjggMS42NDMtMS44OTggMi41NTUtMS44OTggMi41NTVsLjAzNi4wMzdjLS45NDkgMS4yNDEtMS45NzEgMi41OTItMy4xMDMgMy45MDZjLTMuOTggNC43NDctOC43MjYgMTAuMTg3LTkuMzgzIDExLjc1N2MtLjc2NyAxLjg2Mi0uNTg0IDMuMjEyLjg3NiA0LjMwOGMxLjA1OS44MDMgMi45NTcuOTEyIDQuODkyLjgwM2MzLjU3OC0uMjU2IDYuMDk4LTEuMTMyIDcuMzM5LTEuNjhjMS45MzUtLjY5MyA0LjE5OS0xLjc1MiA2LjMxNi0zLjMyMmMzLjkwNy0yLjg4NCA2LjI4LTcuMDEgNi4wNjEtMTIuNDVjLS4xMS0yLjk5NC0xLjA5Ni01Ljk4Ny0yLjMtOC43OTljLjM2NS0uNTExLjY5My0xLjAyMiAxLjA1OC0xLjUzM2M2LjE3MS05LjAxOCAxMC45NTMtMTguOTEyIDEwLjk1My0xOC45MTJzLjQzOCAzLjAzIDEuOTM1IDguMDY5Yy43MyAyLjU1NSAyLjIyNyA1LjMzIDMuNTQyIDguMDMyYy01LjgwNSA0LjcxLTkuMzgzIDEwLjE4Ni0xMC42NjEgMTMuNzY0Yy0yLjMgNi42NDUtLjUxMSA5LjYzOCAyLjg4NCAxMC4zMzJjMS41MzQuMzI5IDMuNzI0LS40MDEgNS4zMzEtMS4wOTVjMi4wNDQtLjY1NyA0LjQ1NC0xLjc4OSA2Ljc1NC0zLjQ2OWMzLjkwNi0yLjg4NCA3LjY2Ny02LjkgNy40NDgtMTIuMzRjLS4xMS0yLjQ4Mi0uNzY3LTQuOTI5LTEuNjgtNy4zMDJjNC45MjktMi4wNDQgMTEuMjgyLTMuMTc2IDE5LjM4Ny0yLjIyN2MxNy4zNzkgMi4wNDUgMjAuODExIDEyLjg4OCAyMC4xNTMgMTcuNDUyYy0uNjU3IDQuNTYzLTQuMzA4IDcuMDQ2LTUuNTEzIDcuODEzYy0xLjIwNC43NjctMS42MDYgMS4wMjItMS40OTYgMS41N2MuMTQ2LjgwMy43My43NjYgMS43NTIuNjJjMS40MjQtLjI1NSA5LjEyNy0zLjY4NyA5LjQ1Ni0xMi4wODRjLjU0OC0xMC43MzQtOS42NzUtMjIuNDU0LTI3Ljc0Ny0yMi4zNDRNNjYuMDQzIDE4NC4zNjJjLTUuNzY4IDYuMjc5LTEzLjggOC42NTMtMTcuMjY5IDYuNjQ1Yy0zLjcyNC0yLjE1NS0yLjI2NC0xMS40MjggNC44Mi0xOC4wNzNjNC4zMDctNC4wNTIgOS44NTctNy44MTMgMTMuNTQ0LTEwLjExM2MuODQtLjUxMSAyLjA4MS0xLjI0MSAzLjU3OC0yLjE1NGMuMjU2LS4xNDYuNDAyLS4yMTkuNDAyLS4yMTlsLjg3Ni0uNTQ4YzIuNTkyIDkuNDkzLjExIDE3Ljg1NC01Ljk1IDI0LjQ2Mm00MS45ODYtMjguNTUxYy0yLjAwOCA0Ljg5My02LjIwNiAxNy40MTUtOC43NjIgMTYuNzIyYy0yLjE5LS41ODUtMy41NDEtMTAuMDc3LS40MzgtMTkuNDZjMS41Ny00LjcxIDQuODkyLTEwLjMzMiA2LjgyNy0xMi41MjNjMy4xNC0zLjUwNSA2LjYwOC00LjY3MyA3LjQ0OC0zLjI0OWMxLjA1OSAxLjg2Mi0zLjgzMyAxNS40NDMtNS4wNzUgMTguNTFtMzQuNjQ4IDE2LjU3NmMtLjg0LjQzOC0xLjY0My43My0yLjAwOC41MTFjLS4yNTYtLjE0Ni4zNjUtLjczLjM2NS0uNzNzNC4zNDUtNC42NzQgNi4wNjEtNi43OTFjLjk4NS0xLjI0MiAyLjE1NC0yLjcwMiAzLjM5NS00LjM0NXYuNDc1YzAgNS41ODYtNS40MDMgOS4zNDYtNy44MTMgMTAuODhtMjYuNzI1LTYuMDk4Yy0uNjIxLS40MzgtLjUxMS0xLjg5OCAxLjU3LTYuNDYyYy44MDMtMS43ODkgMi43MDItNC43ODIgNS45NTEtNy42NjdjLjM2NSAxLjE2OS42MjEgMi4zLjU4NCAzLjM1OWMtLjAzNiA3LjA0Ny01LjA3NSA5LjY3NS04LjEwNSAxMC43NyIgLz4KCQk8L2c+CgkJPGRlZnM+CgkJCTxjbGlwUGF0aCBpZD0iU1ZHMlYwdkhRUnciPgoJCQkJPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI4IDUzaDIwMHYxNDkuOTA5SDI4eiIgLz4KCQkJPC9jbGlwUGF0aD4KCQk8L2RlZnM+Cgk8L2c+Cjwvc3ZnPgo="
                alt="Sass"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                Sass
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="Tailwind CSS"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzI0MjkzOCIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9InVybCgjU1ZHZGdla09kWmYpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04MyAxMTBxOS0zNiA0NS0zNmMzNiAwIDQwLjUgMjcgNTguNSAzMS41cTE4IDQuNTAyIDMxLjUtMTMuNXEtOSAzNi00NSAzNmMtMzYgMC00MC41LTI3LTU4LjUtMzEuNVE5Ni41IDkyIDgzIDExMG0tNDUgNTRxOS0zNiA0NS0zNmMzNiAwIDQwLjUgMjcgNTguNSAzMS41cTE4IDQuNTAyIDMxLjUtMTMuNXEtOSAzNi00NSAzNmMtMzYgMC00MC41LTI3LTU4LjUtMzEuNXEtMTgtNC41MDItMzEuNSAxMy41IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIC8+CgkJPGRlZnM+CgkJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHZGdla09kWmYiIHgxPSI4Ni41IiB4Mj0iMTYzLjUiIHkxPSI3NCIgeTI9IjE4NS41IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CgkJCQk8c3RvcCBzdG9wLWNvbG9yPSIjMzJiMWMxIiAvPgoJCQkJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMTRjNmI3IiAvPgoJCQk8L2xpbmVhckdyYWRpZW50PgoJCTwvZGVmcz4KCTwvZz4KPC9zdmc+Cg=="
                alt="Tailwind CSS"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                Tailwind CSS
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="Bootstrap"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0idXJsKCNTVkd0UGkxdGJJWikiIHJ4PSI2MCIgLz4KCQk8ZyBmaWx0ZXI9InVybCgjU1ZHZGJWdlhibHUpIj4KCQkJPHBhdGggZmlsbD0idXJsKCNTVkc1U2c3NUhNYykiIGQ9Ik0xMzEuOTcgMTk2LjE1N2MyOS42NzYgMCA0Ny41NTktMTQuNTMxIDQ3LjU1OS0zOC40OTdjMC0xOC4xMTctMTIuNzU5LTMxLjIzMi0zMS43MDYtMzMuMzA5di0uNzU0YzEzLjkyLTIuMjY1IDI0Ljg0My0xNS4xOTIgMjQuODQzLTI5LjYyOGMwLTIwLjU3LTE2LjIzOS0zMy45NjktNDAuOTg2LTMzLjk2OUg3NnYxMzYuMTU3ek05Ny42NTMgNzcuMjY3aDI4LjgwN2MxNS42NiAwIDI0LjU1MyA2Ljk4MyAyNC41NTMgMTkuNjI3YzAgMTMuNDkzLTEwLjM0MyAyMS4wNDEtMjkuMDk2IDIxLjA0MUg5Ny42NTN6bTAgMTAxLjYyM3YtNDQuODE5aDI4LjYxM2MyMC40OTQgMCAzMS4xMjcgNy41NDggMzEuMTI3IDIyLjI2OGMwIDE0LjcxOS0xMC4zNDMgMjIuNTUxLTI5Ljg3IDIyLjU1MXoiIC8+CgkJCTxwYXRoIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTMxLjk3IDE5Ni4xNTdjMjkuNjc2IDAgNDcuNTU5LTE0LjUzMSA0Ny41NTktMzguNDk3YzAtMTguMTE3LTEyLjc1OS0zMS4yMzItMzEuNzA2LTMzLjMwOXYtLjc1NGMxMy45Mi0yLjI2NSAyNC44NDMtMTUuMTkyIDI0Ljg0My0yOS42MjhjMC0yMC41Ny0xNi4yMzktMzMuOTY5LTQwLjk4Ni0zMy45NjlINzZ2MTM2LjE1N3pNOTcuNjUzIDc3LjI2N2gyOC44MDdjMTUuNjYgMCAyNC41NTMgNi45ODMgMjQuNTUzIDE5LjYyN2MwIDEzLjQ5My0xMC4zNDMgMjEuMDQxLTI5LjA5NiAyMS4wNDFIOTcuNjUzem0wIDEwMS42MjN2LTQ0LjgxOWgyOC42MTNjMjAuNDk0IDAgMzEuMTI3IDcuNTQ4IDMxLjEyNyAyMi4yNjhjMCAxNC43MTktMTAuMzQzIDIyLjU1MS0yOS44NyAyMi41NTF6IiAvPgoJCTwvZz4KCQk8ZGVmcz4KCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkd0UGkxdGJJWiIgeDE9IjAiIHgyPSIyNTYiIHkxPSIwIiB5Mj0iMjU2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CgkJCQk8c3RvcCBzdG9wLWNvbG9yPSIjOTAxM2ZlIiAvPgoJCQkJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNmIxMWY0IiAvPgoJCQk8L2xpbmVhckdyYWRpZW50PgoJCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWRzVTZzc1SE1jIiB4MT0iODUuNzkzIiB4Mj0iMTQ4LjU0MSIgeTE9IjY4Ljk2MiIgeTI9IjE3NS4wODQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmMWU1ZmMiIC8+CgkJCTwvbGluZWFyR3JhZGllbnQ+CgkJCTxmaWx0ZXIgaWQ9IlNWR2RiVnZYYmx1IiB3aWR0aD0iMTM3LjUyOSIgaGVpZ2h0PSIxNzAuMTU3IiB4PSI1OSIgeT0iNDciIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4IiAvPgoJCQkJPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9ImhhcmRBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgLz4KCQkJCTxmZU9mZnNldCBkeT0iNCIgLz4KCQkJCTxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjgiIC8+CgkJCQk8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMTUgMCIgLz4KCQkJCTxmZUJsZW5kIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd18xNThfMTAwIiAvPgoJCQkJPGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzE1OF8xMDAiIHJlc3VsdD0ic2hhcGUiIC8+CgkJCTwvZmlsdGVyPgoJCTwvZGVmcz4KCTwvZz4KPC9zdmc+Cg=="
                alt="Bootstrap"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                Bootstrap
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="Supabase"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzI0MjkzOCIgcng9IjYwIiAvPgoJCTxnIGNsaXAtcGF0aD0idXJsKCNTVkcwdlpWZHVkZikiPgoJCQk8cGF0aCBmaWxsPSJ1cmwoI1NWR2lXT2x0ZGNVKSIgZD0iTTE0NC43NTcgMjIzLjE5M2MtNS4wNjEgNi4zNzMtMTUuMzIzIDIuODgxLTE1LjQ0NS01LjI1N2wtMS43ODMtMTE5LjAyOWg4MC4wMzVjMTQuNDk2IDAgMjIuNTgxIDE2Ljc0NCAxMy41NjcgMjguMDk3eiIgLz4KCQkJPHBhdGggZmlsbD0idXJsKCNTVkdUYlEzU1Q3USkiIGZpbGwtb3BhY2l0eT0iLjIiIGQ9Ik0xNDQuNzU3IDIyMy4xOTNjLTUuMDYxIDYuMzczLTE1LjMyMyAyLjg4MS0xNS40NDUtNS4yNTdsLTEuNzgzLTExOS4wMjloODAuMDM1YzE0LjQ5NiAwIDIyLjU4MSAxNi43NDQgMTMuNTY3IDI4LjA5N3oiIC8+CgkJCTxwYXRoIGZpbGw9IiMzZWNmOGUiIGQ9Ik0xMTIuMjA3IDMxLjY2NmM1LjA2MS02LjM3NSAxNS4zMjMtMi44ODIgMTUuNDQ1IDUuMjU2bC43ODIgMTE5LjAyOUg0OS40Yy0xNC40OTcgMC0yMi41ODItMTYuNzQ0LTEzLjU2Ny0yOC4wOTd6IiAvPgoJCTwvZz4KCQk8ZGVmcz4KCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdpV09sdGRjVSIgeDE9IjEyNy41MjkiIHgyPSIxOTguNjYxIiB5MT0iMTI1LjI5OSIgeTI9IjE1NS4xMzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxzdG9wIHN0b3AtY29sb3I9IiMyNDkzNjEiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzZWNmOGUiIC8+CgkJCTwvbGluZWFyR3JhZGllbnQ+CgkJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHVGJRM1NUN1EiIHgxPSI5NS45OTMiIHgyPSIxMjguNDMzIiB5MT0iODIuMTIiIHkyPSIxNDMuMTg3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CgkJCQk8c3RvcCAvPgoJCQkJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLW9wYWNpdHk9IjAiIC8+CgkJCTwvbGluZWFyR3JhZGllbnQ+CgkJCTxjbGlwUGF0aCBpZD0iU1ZHMHZaVmR1ZGYiPgoJCQkJPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMyIDI4aDE5Mi45MnYyMDBIMzJ6IiAvPgoJCQk8L2NsaXBQYXRoPgoJCTwvZGVmcz4KCTwvZz4KPC9zdmc+Cg=="
                alt="Supabase"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                Supabase
              </span>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <p className="m-0 mb-1 lg:mb-4 text-center text-base sm:text-lg">
            Game Dev
          </p>

          <div
            className="
              grid grid-cols-4
              place-items-center

              gap-x-3 gap-y-4
              sm:gap-x-0 sm:gap-y-5

              lg:grid-cols-1
              lg:gap-x-0 lg:gap-y-10

              bg-[rgba(255,255,255,0.1)]
              rounded-lg
              py-6 lg:py-10
            "
          >
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="Godot"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzI0MjkzOCIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMjIuMDE3IDE2My42ODFzLS4zMTItMS44ODktLjQ5NS0xLjg3MmwtMzQuNzUgMy4zMDdjLTIuNzY1LjI2My00LjkxMiAyLjQzOC01LjEwNiA1LjE3bC0uOTU1IDEzLjQ5NWwtMjYuODg0IDEuODkybC0xLjgyOS0xMi4yMzFjLS40MDctMi43Mi0yLjgxNi00Ljc3LTUuNjA0LTQuNzdoLTM2LjY3NmMtMi43ODcgMC01LjE5NiAyLjA1LTUuNjAzIDQuNzdsLTEuODMgMTIuMjMxbC0yNi44ODQtMS44OTJsLS45NTQtMTMuNDk1Yy0uMTk0LTIuNzMzLTIuMzQyLTQuOTA4LTUuMTA3LTUuMTcxbC0zNC43NjctMy4zMDZjLS4xOC0uMDE3LS4zMTEgMS44NzQtLjQ5IDEuODc0bC0uMDQ4IDcuNDE2bDI5LjQ0NSA0LjY4M2wuOTY0IDEzLjYxNWMuMTk1IDIuNzU2IDIuNDUgNC45ODUgNS4yNDcgNS4xODNsMzcuMDI1IDIuNjA1cS4yMS4wMTQuNDE3LjAxNWMyLjc4MiAwIDUuMTg3LTIuMDUyIDUuNTk0LTQuNzcybDEuODgxLTEyLjU4NGgyNi44OTdsMS44ODEgMTIuNTg0Yy40MDcgMi43MTkgMi44MTQgNC43NzEgNS42MDEgNC43NzFxLjIwNCAwIC40MDYtLjAxNGwzNy4wMy0yLjYwNWMyLjc5NS0uMTk4IDUuMDUxLTIuNDI3IDUuMjQ2LTUuMTgzbC45NjQtMTMuNjE1bDI5LjQzMi00LjcwNHoiIC8+CgkJPHBhdGggZmlsbD0iIzQ3OGNiZiIgZD0iTTM0LjA4MiAxMDcuNzU4djU1LjkyM3EuMTU2LjAwMS4zMS4wMTRsMzQuNzYzIDMuMzA2YzEuODIxLjE3MyAzLjI0OCAxLjYxOCAzLjM3NSAzLjQxOGwxLjA3MiAxNS4xMzRsMzAuMzI0IDIuMTM0bDIuMDg5LTEzLjk2OGMuMjcxLTEuODExIDEuODQ2LTMuMTUzIDMuNzA0LTMuMTUzaDM2LjY3NmMxLjg1NiAwIDMuNDMyIDEuMzQyIDMuNzAyIDMuMTUzbDIuMDg5IDEzLjk2OGwzMC4zMjUtMi4xMzRsMS4wNzEtMTUuMTM0Yy4xMjgtMS44IDEuNTU0LTMuMjQ0IDMuMzc1LTMuNDE4bDM0Ljc1LTMuMzA2cS4xNTUtLjAxMy4zMDktLjAxNHYtNC40NjJsLjAxNS0uMDA1di01MS40NTZoLjEyOGM0LjYwNi01Ljc5NyA4Ljg2Ny0xMS45MDUgMTIuOTU0LTE4LjQyMmMtNS40MjgtOS4xMTItMTIuMDc4LTE3LjI1NS0xOS4xODYtMjQuOGMtNi41OTIgMy4yNzMtMTIuOTk1IDYuOTgtMTkuMDQzIDEwLjkyNmMtMy4wMjYtMi45NjctNi40MzUtNS4zOTQtOS43ODMtNy45M2MtMy4yODktMi42MDYtNi45OTYtNC41MTYtMTAuNTEyLTYuNzQyYzEuMDQ2LTcuNjg5IDEuNTY0LTE1LjI1NyAxLjc3Mi0yMy4xNTdjLTkuMDcyLTQuNTAzLTE4Ljc0Ni03LjQ4OS0yOC41MzItOS42MzNjLTMuOTA3IDYuNDc2LTcuNDc5IDEzLjQ4OS0xMC41OTEgMjAuMzQ1Yy0zLjY5LS42MDgtNy4zOTctLjgzNC0xMS4xMDktLjg3N3YtLjAwNmMtLjAyNiAwLS4wNS4wMDYtLjA3Mi4wMDZjLS4wMjMgMC0uMDQ3LS4wMDYtLjA3LS4wMDZ2LjAwNmMtMy43MTkuMDQzLTcuNDIzLjI2OS0xMS4xMTQuODc3Yy0zLjExLTYuODU2LTYuNjgxLTEzLjg2OS0xMC41OTQtMjAuMzQ1Yy05Ljc4IDIuMTQ1LTE5LjQ1NiA1LjEzLTI4LjUyNyA5LjYzM2MuMjA4IDcuOS43MjUgMTUuNDY4IDEuNzc1IDIzLjE1N2MtMy41MjMgMi4yMjYtNy4yMjUgNC4xMzYtMTAuNTE2IDYuNzQyYy0zLjM0MyAyLjUzNi02Ljc1NyA0Ljk2My05Ljc4NCA3LjkzYy02LjA0OC0zLjk0NS0xMi40NS03LjY1My0xOS4wNDQtMTAuOTI1QzMzLjA3NSA3Mi4wOCAyNi40MyA4MC4yMjQgMjEgODkuMzM3YzQuMDg1IDYuNTE2IDguMzQ5IDEyLjYyNCAxMi45NTMgMTguNDIxeiIgLz4KCQk8cGF0aCBmaWxsPSIjNDc4Y2JmIiBkPSJtMTkwLjgzIDE3NC4wNWwtMS4wNzcgMTUuMjE1Yy0uMTI5IDEuODM0LTEuNjA5IDMuMjkzLTMuNDY4IDMuNDI1bC0zNy4wMjkgMi42MDZxLS4xMzUuMDA5LS4yNy4wMDljLTEuODQgMC0zLjQyNy0xLjMzMi0zLjY5OS0zLjE1NGwtMi4xMjQtMTQuMjAySDExMi45NWwtMi4xMjQgMTQuMjAyYy0uMjg1IDEuOTExLTIuMDE4IDMuMjg2LTMuOTY5IDMuMTQ1bC0zNy4wMy0yLjYwNmMtMS44NTktLjEzMi0zLjMzOC0xLjU5MS0zLjQ2Ny0zLjQyNWwtMS4wNzctMTUuMjE1bC0zMS4yNTktMi45NzJjLjAxNSAzLjMxMy4wNTggNi45NDMuMDU4IDcuNjY2YzAgMzIuNTU4IDQxLjg3OSA0OC4yMDggOTMuOTExIDQ4LjM4OGguMTI3YzUyLjAzMi0uMTggOTMuODk2LTE1LjgzIDkzLjg5Ni00OC4zODhjMC0uNzM2LjA0Ni00LjM1MS4wNjEtNy42NjZ6IiAvPgoJCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05OS43MjcgMTMwLjQ1OWMwIDExLjQxNS05LjM3OSAyMC42NjMtMjAuOTUgMjAuNjYzYy0xMS41NjUgMC0yMC45NDctOS4yNDgtMjAuOTQ3LTIwLjY2M2MwLTExLjQwOCA5LjM4Mi0yMC42NTEgMjAuOTQ3LTIwLjY1MWMxMS41NzEgMCAyMC45NSA5LjI0MyAyMC45NSAyMC42NTEiIC8+CgkJPHBhdGggZmlsbD0iIzQxNDA0MiIgZD0iTTk0LjY4NiAxMzEuNjg0YzAgNy41NzItNi4yMjMgMTMuNzA5LTEzLjkwNiAxMy43MDljLTcuNjggMC0xMy45MDYtNi4xMzctMTMuOTA2LTEzLjcwOVM3My4xIDExNy45NyA4MC43OCAxMTcuOTdjNy42ODMgMCAxMy45MDYgNi4xNDIgMTMuOTA2IDEzLjcxNCIgLz4KCQk8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTI4LjA1NSAxNTMuMDAxYy0zLjcyNSAwLTYuNzQzLTIuNzA3LTYuNzQzLTYuMDQ0di0xOS4wMmMwLTMuMzM0IDMuMDE4LTYuMDQ0IDYuNzQzLTYuMDQ0YzMuNzI0IDAgNi43NDkgMi43MSA2Ljc0OSA2LjA0NHYxOS4wMmMwIDMuMzM3LTMuMDI1IDYuMDQ0LTYuNzQ5IDYuMDQ0bTI4LjMzMS0yMi41NDJjMCAxMS40MTUgOS4zNzkgMjAuNjYzIDIwLjk1MiAyMC42NjNjMTEuNTY0IDAgMjAuOTQ1LTkuMjQ4IDIwLjk0NS0yMC42NjNjMC0xMS40MDgtOS4zODEtMjAuNjUxLTIwLjk0NS0yMC42NTFjLTExLjU3MyAwLTIwLjk1MiA5LjI0My0yMC45NTIgMjAuNjUxIiAvPgoJCTxwYXRoIGZpbGw9IiM0MTQwNDIiIGQ9Ik0xNjEuNDI4IDEzMS42ODRjMCA3LjU3MiA2LjIyMSAxMy43MDkgMTMuODk5IDEzLjcwOWM3LjY4NSAwIDEzLjkwNi02LjEzNyAxMy45MDYtMTMuNzA5cy02LjIyMS0xMy43MTQtMTMuOTA2LTEzLjcxNGMtNy42NzggMC0xMy44OTkgNi4xNDItMTMuODk5IDEzLjcxNCIgLz4KCTwvZz4KPC9zdmc+Cg=="
                alt="Godot"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                Godot
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="GDScript"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzIgMzIiPgoJPHBhdGggZD0iTTAgMGgzMnYzMkgweiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiM0NzhjYmYiIGQ9Ik0yOC4xNjYgMjEuMDI5djEuNjUyYS4zNy4zNyAwIDAgMS0uMjYuMzU3bC0yLjYuODQxYS4zNy4zNyAwIDAgMS0uMzM1LS4wNTRhLjM3LjM3IDAgMCAxLS4xNTUtLjN2LTEuOGwtMi40MzguNDY0djEuODMxYS4zNzUuMzc1IDAgMCAxLS4zMjUuMzcxbC0zLjUyNS40ODNoLS4wNTFhLjM3NC4zNzQgMCAwIDEtLjM3Ny0uMzc0di0xLjk0M2wtMS44MTkuMDA4aC0uMjY3bC0xLjgxOS0uMDA4VjI0LjVhLjM3NS4zNzUgMCAwIDEtLjM3NS4zNzZoLS4wNTJsLTMuNTI1LS40ODNhLjM3NS4zNzUgMCAwIDEtLjMyNC0uMzcxdi0xLjgzOEw3LjQ4IDIxLjcydjEuOGEuMzcuMzcgMCAwIDEtLjE1NC4zYS4zNy4zNyAwIDAgMS0uMzM2LjA1NGwtMi42LS44NDFhLjM3LjM3IDAgMCAxLS4yNTktLjM1N3YtMS42NDdsLTEuNjA4LS41NDFhNC42IDQuNiAwIDAgMC0uMTI0IDEuMDRjMCA0LjMxNyA2LjA4MiA3LjY1IDEzLjYgNy42NzRoLjAxOWM3LjUxNy0uMDI0IDEzLjYtMy4zNTYgMTMuNi03LjY3NGE0LjUgNC41IDAgMCAwLS4xLS45NVoiIC8+Cgk8cGF0aCBmaWxsPSIjNDc4Y2JmIiBkPSJNMy43MTEgMTMuMzczVjIwLjFsLjkwNy4zMDZhLjM3LjM3IDAgMCAxIC4yNTYuMzU1djEuNjVsMS44NTUuNnYtMS43NDRhLjM3Ni4zNzYgMCAwIDEgLjQ0NS0uMzY5bDMuMTg5LjYwOWEuMzc0LjM3NCAwIDAgMSAuMzA1LjM2OHYxLjgxOGwyLjc3NS4zNzl2LTEuODlhLjM3NC4zNzQgMCAwIDEgLjM3Ni0uMzc1bDIuMzI3LjAwOWwyLjMyNi0uMDA5YS4zNzQuMzc0IDAgMCAxIC4zNzcuMzc1djEuODlsMi43NzUtLjM3OXYtMS44MTlhLjM3LjM3IDAgMCAxIC4zLS4zNjhsMy4xODktLjYwOWEuMzc3LjM3NyAwIDAgMSAuNDQ2LjM2OXYxLjc0MWwxLjg1NS0uNlYyMC43NmEuMzcuMzcgMCAwIDEgLjI1NS0uMzU1bC42MTgtLjIwOHYtNi44MjRoLjAxN0EyNyAyNyAwIDAgMCAzMCAxMC45MzFhMTkgMTkgMCAwIDAtMi41MDktMy4yODhBMjUgMjUgMCAwIDAgMjUgOS4wOTFhMTMgMTMgMCAwIDAtMS4yNzktMS4wNTJhMTUgMTUgMCAwIDAtMS4zNzUtLjg5NGEyOCAyOCAwIDAgMCAuMjMyLTMuMDcxQTE2IDE2IDAgMCAwIDE4Ljg0NyAyLjhhMjYgMjYgMCAwIDAtMS4zODUgMi43YTkuNSA5LjUgMCAwIDAtMS40NTMtLjExNmgtLjAxOGE5LjUgOS41IDAgMCAwLTEuNDU0LjExNmEyNiAyNiAwIDAgMC0xLjM4NS0yLjdhMTYgMTYgMCAwIDAtMy43MyAxLjI3NWEyOCAyOCAwIDAgMCAuMjMyIDMuMDcxYTE1IDE1IDAgMCAwLTEuMzc2Ljg5NEExMyAxMyAwIDAgMCA3IDkuMDkxYTI1IDI1IDAgMCAwLTIuNDktMS40NDhBMTkgMTkgMCAwIDAgMiAxMC45MzFhMjcgMjcgMCAwIDAgMS42OTQgMi40NDNaIiAvPgoJPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyLjQ2MiAxNi42YTIuNzM5IDIuNzM5IDAgMSAxLTIuNzQtMi43MzhhMi43NCAyLjc0IDAgMCAxIDIuNzQgMi43MzgiIC8+Cgk8cGF0aCBmaWxsPSIjNDE0MDQyIiBkPSJNMTEuOCAxNi43NjRhMS44MTkgMS44MTkgMCAxIDEtMS44MTktMS44MTlhMS44MTcgMS44MTcgMCAwIDEgMS44MTkgMS44MTkiIC8+Cgk8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYuMTY2IDE5LjU5YS44NDQuODQ0IDAgMCAxLS44ODItLjh2LTIuNTIzYS44ODYuODg2IDAgMCAxIDEuNzY0IDB2Mi41MjJhLjg0NS44NDUgMCAwIDEtLjg4My44bTMuNzA2LTIuOTg5YTIuNzM5IDIuNzM5IDAgMSAwIDIuNzQtMi43MzhhMi43NCAyLjc0IDAgMCAwLTIuNzQgMi43MzgiIC8+Cgk8cGF0aCBmaWxsPSIjNDE0MDQyIiBkPSJNMjAuNTMxIDE2Ljc2NGExLjgxOCAxLjgxOCAwIDEgMCAxLjgxNy0xLjgxOWExLjgxNyAxLjgxNyAwIDAgMC0xLjgxNyAxLjgxOSIgLz4KPC9zdmc+Cg=="
                alt="GDScript"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                GDScript
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="Unity"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzI0MjkzOCIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9IiNjY2MiIGQ9Ik0yMTYuMDQyIDE2Ny44MTRWNzQuNzQzTDEzNS4zOCAyOC4yMDd2MzUuNzhsMzEuNjQ1IDE4LjIwMWMxLjI0MS42MiAxLjI0MSAyLjQ4MiAwIDMuMTAybC0zNy42NDMgMjEuNzE3Yy0xLjAzNC42MjEtMi40ODEuNjIxLTMuNTE2IDBMODguMjI0IDg1LjA4NGMtMS4yNC0uNjItMS4yNC0yLjQ4MiAwLTMuMTAzbDMxLjY0NS0xOC4yVjI4TDM5LjIwNyA3NC41MzZ2OTMuMjc4di0uNDE0di40MTRsMzEuMDI0LTE3Ljc4N3YtMzYuNjA4YzAtMS4yNDEgMS40NDctMi4yNzUgMi42ODgtMS40NDhsMzcuNjQyIDIxLjcxN2MxLjAzNS42MiAxLjg2MiAxLjg2MSAxLjg2MiAzLjEwMnY0My40MzNjMCAxLjI0MS0xLjQ0OCAyLjI3NS0yLjY4OSAxLjQ0OEw3OC4wOSAxNjMuNDdsLTMxLjAyNCAxNy43ODdsODAuNjYyIDQ2LjUzNmw4MC42NjItNDYuNTM2bC0zMS4wMjQtMTcuNzg3bC0zMS42NDQgMTguMjAxYy0xLjAzNC42Mi0yLjY4OS0uMjA3LTIuNjg5LTEuNDQ4VjEzNi43OWMwLTEuMjQxLjYyLTIuNDgyIDEuODYxLTMuMTAybDM3LjY0My0yMS43MTdjMS4wMzQtLjYyMSAyLjY4OC4yMDcgMi42ODggMS40NDh2MzYuNjA4eiIgLz4KCQk8cGF0aCBmaWxsPSIjYTZhNmE2IiBkPSJtMTI3LjUyMSAyMjhsODAuNjYyLTQ2LjUzNmwtMzEuMDI0LTE3Ljc4N2wtMzEuNjQ0IDE4LjIwMWMtMS4wMzQuNjIxLTIuNjg5LS4yMDctMi42ODktMS40NDh2LTQzLjQzM2MwLTEuMjQxLjYyMS0yLjQ4MiAxLjg2Mi0zLjEwMmwzNy42NDItMjEuNzE3YzEuMDM0LS42MiAyLjY4OS4yMDcgMi42ODkgMS40NDh2MzYuNjA4bDMxLjAyMyAxNy43ODdWNzQuNzQzbC04OC41MjEgNTEuMDg1eiIgLz4KCQk8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTM1LjE3NCAyOHYzNS43OGwzMS42NDQgMTguMjAxYzEuMjQxLjYyIDEuMjQxIDIuNDgyIDAgMy4xMDNMMTI5LjE3NiAxMDYuOGMtMS4wMzQuNjIxLTIuNDgyLjYyMS0zLjUxNiAwTDg4LjIyNCA4NS4wODRjLTEuMjQtLjYyLTEuMjQtMi40ODIgMC0zLjEwM2wzMS42NDUtMTguMlYyOEwzOS4yMDcgNzQuNTM2bDg4LjUyMSA1MS4wODVsODguNTIxLTUxLjA4NXoiIC8+CgkJPHBhdGggZmlsbD0iI2NjYyIgZD0ibTEwOS4zMiAxODEuNjcxbC0zMS42NDQtMTguMmwtMzEuMDIzIDE3Ljc4N2w4MC42NjEgNDYuNTM1VjEyNS42MjJMMzkgNzQuNzQydjkzLjI3OXYtLjQxNHYuNDE0bDMxLjAyNC0xNy43ODd2LTM2LjYwOGMwLTEuMjQxIDEuNDQ4LTIuMjc1IDIuNjg5LTEuNDQ4bDM3LjY0MiAyMS43MTdjMS4wMzQuNjIgMS44NjEgMS44NjEgMS44NjEgMy4xMDJ2NDMuNDMzYy0uMjA3IDEuMDM0LTEuNjU1IDEuODYyLTIuODk2IDEuMjQxIiAvPgoJPC9nPgo8L3N2Zz4K"
                alt="Unity"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                Unity
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="C#"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzk1M2NhZCIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOTUuNDM2IDEwMC42Njh2MTMuNDc0aDEzLjQ3NHYtMTMuNDc0aDYuNzM3djEzLjQ3NGgxMy40NzN2Ni43MzdoLTEzLjQ3M3YxMy40NzNoMTMuNDczdjYuNzM3aC0xMy40NzN2MTMuNDc0aC02LjczN3YtMTMuNDc0aC0xMy40NzR2MTMuNDc0aC02LjczN3YtMTMuNDc0aC0xMy40NzN2LTYuNzM3aDEzLjQ3M3YtMTMuNDczaC0xMy40NzN2LTYuNzM3aDEzLjQ3M3YtMTMuNDc0em0xMy40NzQgMjAuMjExaC0xMy40NzR2MTMuNDczaDEzLjQ3NHoiIC8+CgkJPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyMi4wMDEgMzNjMzUuMTQzIDAgNjUuODI3IDE5LjA4NiA4Mi4yNjEgNDcuNDU2bC0uMTYtLjI3M2wtNDEuMzQ5IDIzLjgwOGMtOC4xNDYtMTMuNzkzLTIzLjA4MS0yMy4xMDItNDAuMjEzLTIzLjI5M2wtLjUzOS0uMDAzYy0yNi4xMjYgMC00Ny4zMDYgMjEuMTc5LTQ3LjMwNiA0Ny4zMDRhNDcuMSA0Ny4xIDAgMCAwIDYuMjM5IDIzLjQ3YzguMTU0IDE0LjIzNSAyMy40ODIgMjMuODM3IDQxLjA2NyAyMy44MzdjMTcuNjkyIDAgMzMuMTA4LTkuNzI0IDQxLjIyMS0yNC4xMTFsLS4xOTcuMzQ1bDQxLjI4NiAyMy45MThjLTE2LjI1NCAyOC4xMy00Ni41MTcgNDcuMTU3LTgxLjI1MiA0Ny41MzZsLTEuMDU4LjAwNmMtMzUuMjU1IDAtNjYuMDI2LTE5LjIwNC04Mi40MTktNDcuNzI0QzMxLjU3OSAxNjEuMzUzIDI3IDE0NS4yMTIgMjcgMTI3Ljk5OUMyNyA3NS41MzMgNjkuNTMyIDMzIDEyMi4wMDEgMzMiIC8+Cgk8L2c+Cjwvc3ZnPgo="
                alt="C#"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                C#
              </span>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <p className="m-0 mb-1 lg:mb-4 text-center text-base sm:text-lg">
            Tools
          </p>

          <div
            className="
              grid grid-cols-4
              place-items-center

              gap-x-3 gap-y-4
              sm:gap-x-0 sm:gap-y-5

              lg:grid-cols-2
              lg:gap-x-0 lg:gap-y-10

              bg-[rgba(255,255,255,0.1)]
              rounded-lg
              py-6 lg:py-10
            "
          >
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="Git"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2YwM2MyZSIgcng9IjYwIiAvPgoJCTxnIGNsaXAtcGF0aD0idXJsKCNTVkdnM0Q0SGQ3SCkiPgoJCQk8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMjI0LjIyNSAxMTkuMDk0bC04Ny4zMTktODcuMzE5YTEyLjg3IDEyLjg3IDAgMCAwLTE0LjAzNS0yLjc5M2ExMi45IDEyLjkgMCAwIDAtNC4xNzcgMi43OTNMMTAwLjU2OSA0OS45bDIzIDIzYzUuMzUtMS44NzUgMTEuNDc1LS41OTQgMTUuNzM3IDMuNjY5YTE1LjMxIDE1LjMxIDAgMCAxIDMuNjMxIDE1LjgzMWwyMi4xNjkgMjIuMTY5YzUuMzYzLTEuODUgMTEuNTUtLjY1NyAxNS44MzEgMy42MzdhMTUuMzIgMTUuMzIgMCAwIDEgMy4zMjEgMTYuNzA2YTE1LjMzMyAxNS4zMzMgMCAwIDEtMjAuMDI5IDguMjkzYy0xLjg2LS43NzEtMy41NS0xLjktNC45NzMtMy4zMjRjLTQuNS00LjUtNS42MTItMTEuMTI1LTMuMzM3LTE2LjY2OWwtMjAuNjc1LTIwLjY3NXY1NC40MDdhMTUuNiAxNS42IDAgMCAxIDQuMDYyIDIuOWExNS4zMjYgMTUuMzI2IDAgMCAxLTIxLjY3NSAyMS42NzVhMTUuMzIgMTUuMzIgMCAwIDEtMy4zMjYtMTYuNzA0YTE1LjMgMTUuMyAwIDAgMSAzLjMyNi00Ljk3MWMxLjQ4MS0xLjQ3NSAzLjEyNS0yLjU5NCA1LjAxOS0zLjM0NHYtNTQuOTEzYTE1LjIgMTUuMiAwIDAgMS01LjAxOS0zLjM0M2ExNS4zMTUgMTUuMzE1IDAgMCAxLTMuMy0xNi43NTdMOTEuNjQ0IDU4LjgxNGwtNTkuODc1IDU5LjgxMmExMi44OCAxMi44OCAwIDAgMC0yLjc5NSAxNC4wNGExMi45IDEyLjkgMCAwIDAgMi43OTUgNC4xNzlsODcuMzI1IDg3LjMxMmExMi45IDEyLjkgMCAwIDAgNC4xNzcgMi43OTNhMTIuOSAxMi45IDAgMCAwIDkuODU4IDBhMTIuOSAxMi45IDAgMCAwIDQuMTc3LTIuNzkzbDg2LjkxOS04Ni43ODFhMTIuODggMTIuODggMCAwIDAgMy43NzYtOS4xMDlhMTIuODggMTIuODggMCAwIDAtMy43NzYtOS4xMSIgLz4KCQk8L2c+CgkJPGRlZnM+CgkJCTxjbGlwUGF0aCBpZD0iU1ZHZzNENEhkN0giPgoJCQkJPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI4IDI4aDIwMHYyMDBIMjh6IiAvPgoJCQk8L2NsaXBQYXRoPgoJCTwvZGVmcz4KCTwvZz4KPC9zdmc+Cg=="
                alt="Git"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                Git
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="GitHub"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzI0MjkzOCIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMjguMDAxIDMwQzcyLjc3OSAzMCAyOCA3NC43NyAyOCAxMzAuMDAxYzAgNDQuMTgzIDI4LjY1MyA4MS42NjcgNjguMzg3IDk0Ljg5YzQuOTk3LjkyNiA2LjgzMi0yLjE2OSA2LjgzMi00LjgxYzAtMi4zODUtLjA5My0xMC4yNjItLjEzNi0xOC42MThjLTI3LjgyIDYuMDQ5LTMzLjY5LTExLjc5OS0zMy42OS0xMS43OTljLTQuNTUtMTEuNTU5LTExLjEwNC0xNC42MzItMTEuMTA0LTE0LjYzMmMtOS4wNzMtNi4yMDcuNjg0LTYuMDc5LjY4NC02LjA3OWMxMC4wNDIuNzA1IDE1LjMzIDEwLjMwNSAxNS4zMyAxMC4zMDVjOC45MTkgMTUuMjg4IDIzLjM5NCAxMC44NjggMjkuMSA4LjMxM2MuODk4LTYuNDY0IDMuNDg5LTEwLjg3NSA2LjM0OS0xMy4zNzJjLTIyLjIxMS0yLjUyOS00NS41Ni0xMS4xMDQtNDUuNTYtNDkuNDIxYzAtMTAuOTE4IDMuOTA2LTE5LjgzOSAxMC4zMDMtMjYuODQyYy0xLjAzOS0yLjUxOS00LjQ2Mi0xMi42OS45NjgtMjYuNDY0YzAgMCA4LjM5OC0yLjY4NyAyNy41MDggMTAuMjVjNy45NzctMi4yMTUgMTYuNTMxLTMuMzI2IDI1LjAzLTMuMzY0YzguNDk4LjAzOCAxNy4wNiAxLjE0OSAyNS4wNTEgMy4zNjVjMTkuMDg3LTEyLjkzOSAyNy40NzMtMTAuMjUgMjcuNDczLTEwLjI1YzUuNDQzIDEzLjc3MyAyLjAxOSAyMy45NDUuOTggMjYuNDYzYzYuNDEyIDcuMDAzIDEwLjI5MiAxNS45MjQgMTAuMjkyIDI2Ljg0MmMwIDM4LjQwOS0yMy4zOTQgNDYuODY2LTQ1LjY2MiA0OS4zNDFjMy41ODcgMy4xMDQgNi43ODMgOS4xODkgNi43ODMgMTguNTE5YzAgMTMuMzgtLjExNiAyNC4xNDktLjExNiAyNy40NDNjMCAyLjY2MSAxLjggNS43NzkgNi44NjkgNC43OTdDMTk5LjM4MyAyMTEuNjQgMjI4IDE3NC4xNjkgMjI4IDEzMC4wMDFDMjI4IDc0Ljc3MSAxODMuMjI3IDMwIDEyOC4wMDEgMzBNNjUuNDU0IDE3Mi40NTNjLS4yMi40OTctMS4wMDIuNjQ2LTEuNzE0LjMwNWMtLjcyNi0uMzI2LTEuMTMzLTEuMDA0LS44OTgtMS41MDJjLjIxNS0uNTEyLjk5OS0uNjU0IDEuNzIyLS4zMTFjLjcyNy4zMjYgMS4xNDEgMS4wMS44OSAxLjUwOG00LjkxOSA0LjM4OWMtLjQ3Ny40NDMtMS40MS4yMzctMi4wNDItLjQ2MmMtLjY1NC0uNjk3LS43NzctMS42MjktLjI5My0yLjA3OGMuNDkxLS40NDIgMS4zOTYtLjIzNSAyLjA1MS40NjJjLjY1NC43MDYuNzgyIDEuNjMxLjI4NCAyLjA3OG0zLjM3NCA1LjYxNmMtLjYxMy40MjYtMS42MTUuMDI3LTIuMjM0LS44NjNjLS42MTMtLjg4OS0uNjEzLTEuOTU1LjAxMy0yLjM4M2MuNjIxLS40MjcgMS42MDgtLjA0MyAyLjIzNi44NGMuNjExLjkwNC42MTEgMS45NzEtLjAxNSAyLjQwNm01LjcwNyA2LjUwNGMtLjU0OC42MDQtMS43MTUuNDQyLTIuNTctLjM4M2MtLjg3NC0uODA2LTEuMTE4LTEuOTUtLjU2OC0yLjU1NWMuNTU1LS42MDYgMS43MjktLjQzNSAyLjU5LjM4M2MuODY4LjgwNCAxLjEzMyAxLjk1Ny41NDggMi41NTVtNy4zNzYgMi4xOTVjLS4yNDIuNzg0LTEuMzY2IDEuMTQtMi40OTkuODA3Yy0xLjEzLS4zNDMtMS44NzEtMS4yNi0xLjY0Mi0yLjA1MmMuMjM1LS43ODggMS4zNjQtMS4xNTkgMi41MDUtLjgwM2MxLjEzLjM0MSAxLjg3MSAxLjI1MiAxLjYzNiAyLjA0OG04LjM5NC45MzJjLjAyOC44MjQtLjkzMiAxLjUwOC0yLjEyMSAxLjUyM2MtMS4xOTYuMDI3LTIuMTYzLS42NDEtMi4xNzYtMS40NTJjMC0uODMzLjkzOS0xLjUxIDIuMTM0LTEuNTNjMS4xOS0uMDIzIDIuMTYzLjYzOSAyLjE2MyAxLjQ1OW04LjI0Ni0uMzE2Yy4xNDMuODA0LS42ODMgMS42MzEtMS44NjQgMS44NTFjLTEuMTYxLjIxMi0yLjIzNi0uMjg1LTIuMzgzLTEuMDgzYy0uMTQ0LS44MjUuNjk3LTEuNjUxIDEuODU2LTEuODY1YzEuMTgzLS4yMDUgMi4yNDEuMjc5IDIuMzkxIDEuMDk3IiAvPgoJPC9nPgo8L3N2Zz4K"
                alt="GitHub"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                GitHub
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="VS Code"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzI0MjkzOCIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9IiMyNDg5Y2EiIGQ9Ik0zMy43MTYgMTAwLjIwOHMtNC43MzUtMy40MTMuOTQ3LTcuOTdsMTMuMjM2LTExLjgzNnMzLjc4OC0zLjk4NSA3Ljc5Mi0uNTEzbDEyMi4xNDkgOTIuNDc5djQ0LjM0NnMtLjA1OSA2Ljk2NC04Ljk5NiA2LjE5NHoiIC8+CgkJPHBhdGggZmlsbD0iIzEwNzBiMyIgZD0ibTY1LjIgMTI4Ljc5MmwtMzEuNDg0IDI4LjYyM3MtMy4yMzYgMi40MDcgMCA2LjcwOGwxNC42MTcgMTMuMjk1czMuNDcyIDMuNzI5IDguNjAxLS41MTNsMzMuMzc4LTI1LjMwOXoiIC8+CgkJPHBhdGggZmlsbD0iIzA4NzdiOSIgZD0ibTEyMC40NzQgMTI5LjAyOWw1Ny43NDEtNDQuMDlsLS4zNzUtNDQuMTA5cy0yLjQ2Ni05LjYyNy0xMC42OTItNC42MTZsLTc2LjgzNiA2OS45MzF6IiAvPgoJCTxwYXRoIGZpbGw9IiMzYzk5ZDQiIGQ9Ik0xNjguODQ0IDIyMi45NjhjMy4zNTQgMy40MzIgNy40MTggMi4zMDggNy40MTggMi4zMDhsNDQuOTk3LTIyLjE3M2M1Ljc2LTMuOTI2IDQuOTUxLTguNzk4IDQuOTUxLTguNzk4VjYxLjg5OGMwLTUuODItNS45NTgtNy44MzEtNS45NTgtNy44MzFsLTM4Ljk5OS0xOC44Yy04LjUyMi01LjI2Ny0xNC4xMDUuOTQ3LTE0LjEwNS45NDdzNy4xOC01LjE2OCAxMC42OTIgNC42MTZ2MTc1LjA3NWE4IDggMCAwIDEtLjc2OSAzLjQ1M2MtMS4wMjYgMi4wNzEtMy4yNTUgNC4wMDQtOC42MDEgMy4xOTV6IiAvPgoJPC9nPgo8L3N2Zz4K"
                alt="VS Code"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                VS Code
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="Android Studio"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzI0MjkzOCIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9IiMwNzMwNDIiIGQ9Ik0xMDcuMDI4IDQ4LjgxOGgtNDYuMjRjLTkuMjA4IDAtMTYuNzc3IDcuODYyLTE2Ljc3NyAxNy41OTdjLS4zMyA5LjM5NiA2LjkwNyAxNy4yNTUgMTUuOTU5IDE3LjU5Nmg0Ny41NTJ6IiAvPgoJCTxwYXRoIGZpbGw9IiM0Mjg1ZjQiIGQ9Ik0yMTEuODM1IDIwNS4zMDNINjAuNzg5Yy05LjM3NCAwLTE2Ljc3OC03Ljg1OC0xNi43NzgtMTcuNTk2VjY2LjI0N2MwIDkuNzM1IDcuNTY5IDE3LjU5NCAxNi43NzggMTcuNzY0SDE4Ny4zMlMyMTIgODEuNzkzIDIxMiAxMDEuMDk3djEwNC4yMDZ6IiAvPgoJCTxwYXRoIGZpbGw9IiMzODcwYjIiIGQ9Ik0xNDEuNDEzIDE0My4xMmM2Ljc0Ni01LjI5NSA4LjA2Mi0xNS4yMDMgMi45NjYtMjIuMDM4Yy0yLjgtMy43NTgtNy4wNzgtNi4xNDktMTEuNjg3LTYuMzIxaC40OTRhNi45IDYuOSAwIDAgMSAyLjYzNyAwdi05LjczN2MwLTEuMTk2LS40OTYtMi4yMjEtMS40ODMtMi43MzJjLTEuNDgyLS44NTUtMy4yOTEtLjM0Mi00LjExMyAxLjE5NWMtLjMzLjUxMy0uNDk0IDEuMDI1LS4zMyAxLjcwOHY5LjkwN2MtOC4yMjYgMS4zNjctMTMuOTg1IDkuMzk3LTEyLjY3MiAxOC4xMTF2LjE3Yy42NjEgNC4xIDIuODAyIDcuODU5IDYuMDkxIDEwLjI1bC0yNy44MDcgNjEuODQxaDE4LjFsMTIuODMyLTI4LjM1OGMxLjQ4NC0zLjQxOCA1LjQzMS00Ljk1NCA4Ljg4Ni0zLjI0NmMxLjMxOS42ODQgMi40NjggMS44NzkgMy4xMjYgMy4yNDZsMTMuMzMgMjguMzU4aDE4LjQyNnptLTkuMzc3LTIuNzMzYy01LjI2NiAwLTkuMzc5LTQuNDQyLTkuMzc5LTkuOTA3YzAtNS40NjkgNC4yNzgtOS43MzkgOS41NDItOS41NjljMi40NjggMCA0LjYxMSAxLjAyNiA2LjQxOCAyLjczNmMzLjc4NCAzLjc1NiAzLjc4NCA5LjkwNy4xNjQgMTMuODM2Yy0xLjY0NCAxLjcwOS00LjExNCAyLjkwNC02Ljc0NSAyLjkwNCIgLz4KCQk8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOTYuOTkyIDU3LjM2M2g2NC44MjZ2MTIuMjk5SDk2Ljk5MnoiIC8+CgkJPHBhdGggZmlsbD0iIzA3MzA0MiIgZD0iTTEyNy4xIDEyMC43NDFjNS4wOTkgMCA5LjM4IDQuNDQyIDkuMjE2IDkuOTA4YzAgNS4yOTYtNC4yOCA5LjczOC05LjU0NiA5LjU2N2MtNS4wOTkgMC05LjIxNC00LjQ0MS05LjIxNC05LjczNmMwLTIuNTYzLjk4Ni00Ljk1NiAyLjgwMS02LjgzM2MxLjgwNy0xLjg4MSA0LjI3My0yLjkwNiA2Ljc0My0yLjkwNm0zLjYyLTUuNjM5di0xMC4yNDljMC0xLjE5Ni0uNDkzLTIuMjItMS40OC0yLjczNGMtMS40OC0uODU0LTMuMjkxLS4zNDEtNC4xMTcgMS4xOTdjLS4zMy41MTItLjQ5MyAxLjAyNS0uMzMgMS43MDh2OS45MDljLTguMjI2IDEuMzY1LTEzLjk4NSA5LjM5Ny0xMi42NjQgMTguMTA5di4xNzFjLjY1OSA0LjA5NyAyLjc5NSA3Ljg1NyA2LjA4NiAxMC4yNDdsLTM1LjA0NiA3OC4wNzJjLTEuMzE1IDIuNzM2LTEuMTUxIDYuMTUuNjU5IDguNzEzYzIuNjI5IDMuOTI4IDcuNzM0IDQuOTUzIDExLjUxNCAyLjIyMWMxLjMyLS44NTUgMi4zMDctMi4yMjEgMi45NjQtMy41ODhsMjMuMzY1LTUxLjkzNGMxLjQ4LTMuNDE2IDUuNDI5LTQuOTU0IDguODg1LTMuMjQ2YzEuMzE2LjY4NCAyLjQ2NiAxLjg4MSAzLjEyNSAzLjI0NmwyMy44NTggNTEuNDIyYzEuOTc3IDQuMjcgNi45MSA1Ljk3OCAxMS4wMjcgMy45MjdjNC4xMS0yLjA0OCA1Ljc1Ny03LjE3NCAzLjc4MS0xMS40NDVsLTM2LjAzMS03Ny43MjhjNi41OC01LjQ2OCA3LjczMy0xNS41NDUgMi40NjUtMjIuMzc5Yy0xLjk3MS0yLjczNC00Ljc3LTQuNjEzLTguMDYxLTUuNjM5IiAvPgoJCTxwYXRoIGZpbGw9IiMzZGRjODQiIGQ9Ik0xNTIuMjc2IDY4LjI5NmMtMi40NzEgMC00LjQ0NS0xLjg4MS00LjQ0NS00LjQ0MmMwLTEuMTk2LjQ5Mi0yLjU2MiAxLjMxNS0zLjQxN2MxLjgxMS0xLjcwNyA0LjQ0NS0xLjcwNyA2LjI1NSAwYTQuNzcgNC43NyAwIDAgMSAxLjMxNSAzLjI0NmMtLjE2NCAyLjU2My0xLjk3NCA0LjQ0Mi00LjQ0IDQuNjEzbS00OC43MDQtLjE3MWMtMi40NzIgMC00LjQ0My0yLjA1LTQuNDQzLTQuNDQyYzAtMS4xOTYuNDk1LTIuMzkxIDEuMzE0LTMuMjQ2YzEuNDgyLTEuODc4IDQuMjgzLTIuMjIxIDYuMDktLjY4MWguMTY1YzEuODA4IDEuNzA3IDEuOTcyIDQuNjEuMzMgNi40OWwtLjQ5NS42ODFjLS44MjEuODU1LTEuOTcxIDEuMzY5LTMuMTI3IDEuMzY5em01MC4wMTktMjcuNTA1bDguNzItMTUuNzE2Yy40OTMtLjg1NC4xNjQtMS44NzktLjQ5My0yLjU2MmMtLjgyMy0uMzQyLTEuNjQ0LS4xNzEtMi4xMzcuNTEzbC05LjA1MiAxNi4yMjhjLTE0LjQ3OC02LjY2Mi0zMC45MzEtNi42NjItNDUuMjQ2IDBsLTguODg1LTE2LjA1OGMtLjMzLS41MTItLjk5LTEuMDI1LTEuNjUtMS4wMjVjLS42NTYgMC0xLjMxNS4zNDItMS42NDYgMS4wMjVjLS4zMjguNTEzLS4zMjggMS4zNjYgMCAxLjg3OWw4Ljg4OCAxNS43MTZjLTE1LjQ3IDguNzEtMjUuNTA1IDI1LjExNC0yNi45ODIgNDMuMjIxaDEwNS42MjljLTEuMzEzLTE4LjI3Ny0xMS41MTYtMzQuNTExLTI2Ljk4Mi00My4yMjEiIC8+CgkJPHBhdGggZmlsbD0iIzA3MzA0MiIgZD0iTTE5Ny4zNyAxMTcuODM5aC02LjkxMWMtLjMzMS4xNjgtLjY1OS41MS0uNjU5IDEuMDIydjExMy42MDVjMCAuNTExLjMyOC44NTMuODI1Ljg1M2g3LjIzOGM4LjM5MSAwIDE1LjEzNy03LjE3NiAxNS4xMzctMTUuNzE2VjEwMS45NWMwIDguNzEyLTYuNzQ2IDE1LjcxNy0xNS4xMzcgMTUuNzE3aC0uNDkzeiIgLz4KCTwvZz4KPC9zdmc+Cg=="
                alt="Android Studio"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                Android Studio
              </span>
            </div>

            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="Figma"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzI0MjkzOCIgcng9IjYwIiAvPgoJCTxnIGNsaXAtcGF0aD0idXJsKCNTVkdYd2dJdWRleCkiPgoJCQk8cGF0aCBmaWxsPSIjMGFjZjgzIiBkPSJNOTQuMzQ3IDIyOGMxOC40IDAgMzMuMzMzLTE0LjkzMyAzMy4zMzMtMzMuMzMzdi0zMy4zMzRIOTQuMzQ3Yy0xOC40IDAtMzMuMzM0IDE0LjkzNC0zMy4zMzQgMzMuMzM0Uzc1Ljk0NyAyMjggOTQuMzQ3IDIyOCIgLz4KCQkJPHBhdGggZmlsbD0iI2EyNTlmZiIgZD0iTTYxLjAxMyAxMjhjMC0xOC40IDE0LjkzNC0zMy4zMzMgMzMuMzM0LTMzLjMzM2gzMy4zMzN2NjYuNjY2SDk0LjM0N2MtMTguNCAwLTMzLjMzNC0xNC45MzMtMzMuMzM0LTMzLjMzMyIgLz4KCQkJPHBhdGggZmlsbD0iI2YyNGUxZSIgZD0iTTYxLjAxMyA2MS4zMzNDNjEuMDEzIDQyLjkzMyA3NS45NDcgMjggOTQuMzQ3IDI4aDMzLjMzM3Y2Ni42NjdIOTQuMzQ3Yy0xOC40IDAtMzMuMzM0LTE0LjkzNC0zMy4zMzQtMzMuMzM0IiAvPgoJCQk8cGF0aCBmaWxsPSIjZmY3MjYyIiBkPSJNMTI3LjY4IDI4aDMzLjMzM2MxOC40IDAgMzMuMzM0IDE0LjkzMyAzMy4zMzQgMzMuMzMzcy0xNC45MzQgMzMuMzM0LTMzLjMzNCAzMy4zMzRIMTI3LjY4eiIgLz4KCQkJPHBhdGggZmlsbD0iIzFhYmNmZSIgZD0iTTE5NC4zNDcgMTI4YzAgMTguNC0xNC45MzQgMzMuMzMzLTMzLjMzNCAzMy4zMzNTMTI3LjY4IDE0Ni40IDEyNy42OCAxMjhzMTQuOTMzLTMzLjMzMyAzMy4zMzMtMzMuMzMzUzE5NC4zNDcgMTA5LjYgMTk0LjM0NyAxMjgiIC8+CgkJPC9nPgoJCTxkZWZzPgoJCQk8Y2xpcFBhdGggaWQ9IlNWR1h3Z0l1ZGV4Ij4KCQkJCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02MSAyOGgxMzMuMzZ2MjAwSDYxeiIgLz4KCQkJPC9jbGlwUGF0aD4KCQk8L2RlZnM+Cgk8L2c+Cjwvc3ZnPgo="
                alt="Figma"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                Figma
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="Miro"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+Cgk8cGF0aCBkPSJNMCAwaDQwMHY0MDBIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cGF0aCBmaWxsPSIjZmQzIiBkPSJNMyAxMDAuNzU0QzMgNDYuMjYgNDcuMjQ0IDIgMTAxLjc1NCAyaDE5Ny40OTJDMzUzLjc1NiAyIDM5OCA0Ni4yNDQgMzk4IDEwMC43NTR2MTk3LjQ5MmMwIDU0LjUxLTQ0LjI0NCA5OC43NTQtOTguNzU0IDk4Ljc1NEgxMDEuNzU0QzQ3LjI0NCAzOTcgMyAzNTIuNzU2IDMgMjk4LjI0NnoiIC8+CgkJPHBhdGggZmlsbD0iIzFjMWMxZSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjY1LjU3MyA3Ny4zNUgyMjkuNzRsMjkuODg5IDUyLjVsLTY1LjcyMy01Mi41aC0zNS44MzRsMzIuODYyIDY0LjExOGwtNjguNjk2LTY0LjExOUg4Ni40MDRsMzUuODM0IDgxLjY4MmwtMzUuODM0IDE2My4zNDZoMzUuODM0bDY4LjY5Ni0xNzQuOTgxbC0zMi44NjIgMTc0Ljk4MWgzNS44MzRsNjUuNzIzLTE4Ni42ODRsLTI5Ljg4OSAxODYuNjg0aDM1LjgzM2w2NS43MjQtMjA0LjE0NWwtNjUuNzI0LTQwLjc5OXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz4KCTwvZz4KPC9zdmc+Cg=="
                alt="Miro"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                Miro
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="Gimp"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+Cgk8cGF0aCBkPSJNMCAwaDEyOHYxMjhIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZGVmcz4KCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR1JsQmJpYkdUIiB4MT0iMTkxNS4xNiIgeDI9IjE4OTIuMjM3IiB5MT0iLTEwNjEuNDk2IiB5Mj0iLTEwODEuNDMzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC4xODcwMyAwIDAgLS4xODcwMyAtMjY5LjUzOSAtMTE4LjM2KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQk8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM2ZTNkMDkiIC8+CgkJCTxzdG9wIG9mZnNldD0iLjI0MiIgc3RvcC1jb2xvcj0iI2VhODExMyIgLz4KCQkJPHN0b3Agb2Zmc2V0PSIuNjIxIiBzdG9wLWNvbG9yPSIjNWMzMzA3IiAvPgoJCQk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlMDdjMTIiIC8+CgkJPC9saW5lYXJHcmFkaWVudD4KCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0haODNmZFVtIiB4MT0iMjAxNC41MjgiIHgyPSIyMDIzLjcxOSIgeTE9Ii0xMTQ5LjQzOCIgeTI9Ii0xMTQwLjkzMiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguMTg3MDMgMCAwIC0uMTg3MDMgLTI3MS41NCAtMTE5LjE2KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQk8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNiZGJkYmQiIC8+CgkJCTxzdG9wIG9mZnNldD0iLjMzMyIgc3RvcC1jb2xvcj0iI2UyZTJlMiIgLz4KCQkJPHN0b3Agb2Zmc2V0PSIuNjY3IiBzdG9wLWNvbG9yPSIjYTNhM2EzIiAvPgoJCQk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkZGQiIC8+CgkJPC9saW5lYXJHcmFkaWVudD4KCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR2RiQTJiYjZHIiB4MT0iMjc2OS4zNjMiIHgyPSIyNzU1Ljc5NCIgeTE9IjEuMTA5IiB5Mj0iMTIuMzE4IiBncmFkaWVudFRyYW5zZm9ybT0icm90YXRlKDI3LjYzNSA4My4yODYgLTYwNC43NTgpc2NhbGUoLjE1OTQgLS4xNTk0KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQk8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiIC8+CgkJCTxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIiAvPgoJCTwvbGluZWFyR3JhZGllbnQ+CgkJPHJhZGlhbEdyYWRpZW50IGlkPSJTVkdIMFlRU2RvZSIgY3g9IjEyODQuMTU1IiBjeT0iLTc1Ny44MjkiIHI9IjE4Ljc1NCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguMjg3MzggLjAwMjA2IC0uMDAyMSAtLjI5MzM1IC0yNTcuNzQgLTEyNS43MikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNjk2OTY5IiAvPgoJCQk8c3RvcCBvZmZzZXQ9IjEiIC8+CgkJPC9yYWRpYWxHcmFkaWVudD4KCTwvZGVmcz4KCTxyYWRpYWxHcmFkaWVudCBpZD0iU1ZHMkF3QXNkR2UiIGN4PSIzNTkuNTk2IiBjeT0iLTMwMy42NDQiIHI9IjQ1LjE1OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLjEzMTI5IDAgMCAtLjQ5MjExIC0zNDQuNTc3IC02Ny4zNzIpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CgkJPHN0b3Agb2Zmc2V0PSIwIiAvPgoJCTxzdG9wIG9mZnNldD0iMSIgc3RvcC1vcGFjaXR5PSIwIiAvPgoJPC9yYWRpYWxHcmFkaWVudD4KCTxyYWRpYWxHcmFkaWVudCBpZD0iU1ZHRTluZkZlS2ciIGN4PSIyMDIuOTY4IiBjeT0iLTE2Ljc0IiByPSI0Ny41ODEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMi4wMDU3OSAwIDAgLTEuNDY3MjggLTM2My4yMDQgMzAuNDk4KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCTxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzg1N2M2MyIgLz4KCQk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyMjFmMTkiIC8+Cgk8L3JhZGlhbEdyYWRpZW50PgoJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdLZWVwaWIzSCIgeDE9IjM3Ny4zOTkiIHgyPSIzNDkuODQxIiB5MT0iLTcwLjQ0NSIgeTI9Ii03NS45MTMiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMS4xMzEyOSAwIDAgLTEuMTMxMjkgLTM0OS4wNiAtNC41ODYpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CgkJPHN0b3Agb2Zmc2V0PSIwIiAvPgoJCTxzdG9wIG9mZnNldD0iMSIgc3RvcC1vcGFjaXR5PSIwIiAvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHaFlYN1ljeGQiIHgxPSIzNDkuNDU5IiB4Mj0iNDA3Ljk3IiB5MT0iLTM4LjEwMyIgeTI9Ii0xMDQuNTIyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEuMTMxMjkgMCAwIC0xLjEzMTI5IC0zNDQuNzE4IC00Ljk3OSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQk8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiIC8+CgkJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiIC8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHJhZGlhbEdyYWRpZW50IGlkPSJTVkdzNkdnU1ZaUSIgY3g9IjI2MC45NjgiIGN5PSIxNy40NiIgcj0iOC42OTgiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMS45MDYyMiAwIDAgLTEuOTA2MjIgLTQ2MS42OTMgNzcuNzkpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CgkJPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIiAvPgoJCTxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2I5YjliMCIgLz4KCTwvcmFkaWFsR3JhZGllbnQ+Cgk8cmFkaWFsR3JhZGllbnQgaWQ9IlNWR0loWGtzYjZBIiBjeD0iMjA5LjY3NCIgY3k9Ii0xNzAuMjE0IiByPSIxMS45NTQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjkwMTY0IC0uNTIwNCAtLjYwNzUgLTEuMDUzMjMgLTI4Mi42MzcgLTEyLjA2OSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQk8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1YjY3NmIiIC8+CgkJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMTQxNzE4IiAvPgoJPC9yYWRpYWxHcmFkaWVudD4KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHeEdUNUNlMVkiIHgxPSIxNTcuNjE5IiB4Mj0iMTU2Ljg2OCIgeTE9Ii0yMDcuNTY0IiB5Mj0iLTIyNi43ODQiIGdyYWRpZW50VHJhbnNmb3JtPSJyb3RhdGUoMTQzIC0xMzMuODE5IC01OC45MSlzY2FsZSgtMS4xMzEyOCAxLjEzMTI4KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCTxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIgLz4KCQk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIgLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cmFkaWFsR3JhZGllbnQgaWQ9IlNWR3d2Y0pHZXVRIiBjeD0iMjM4Ljg1OCIgY3k9IjMwLjk3NCIgcj0iOC42OTgiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMi4yMzc3IDAgMCAtMi4yMzc3IC00NzUuMjIyIDExMy42NikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQk8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiIC8+CgkJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYjliOWIwIiAvPgoJPC9yYWRpYWxHcmFkaWVudD4KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHakJaOERiZkMiIHgxPSIzNjcuMDU3IiB4Mj0iMzYyLjUxOSIgeTE9Ii03Mi43MTIiIHkyPSItNzMuODA1IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEuMTMxMjkgMCAwIC0xLjEzMTI5IC0zNDQuNzE4IC00Ljk3OSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQk8c3RvcCBvZmZzZXQ9IjAiIC8+CgkJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLW9wYWNpdHk9IjAiIC8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBhdGggZmlsbD0idXJsKCNTVkcyQXdBc2RHZSkiIGQ9Ik0xMTMuMzQyIDgyLjAxOGMwIDEyLjIxNy0yMi44NTIgMjIuMTc0LTUxLjEzNSAyMi4xNzRzLTUxLjEzNC05Ljk1Ni01MS4xMzQtMjIuMTc0czIyLjg1Mi0yMi4xNzMgNTEuMTMzLTIyLjE3M2MyOC4yODQgMCA1MS4xMzYgOS45NTUgNTEuMTM2IDIyLjE3MyIgLz4KCTxwYXRoIGZpbGw9InVybCgjU1ZHRTluZkZlS2cpIiBkPSJNMjYuNTcyIDI3LjQ5czguMDMxIDE2LjYzIDI2LjkyNCAxNi4xNzdjMzkuNDgyLTEuMDE4IDQ2LjM4My0yMS42MDcgNDcuNC0yNC41NDljMS4wMTktMi45NDEgMi40OS0yLjQ4OSAyLjgzLjIyNmMxMi44OTcgMTE2Ljc1LTg5LjI2IDY2LjYzNC05Mi44OCA0Ni44MzZjMjAuMjUtNS44ODMgMTUuMzg2LTE3LjMxIDE1LjM4Ni0xNy4zMXoiIC8+Cgk8cGF0aCBmaWxsPSIjMmUzNDM2IiBkPSJNMTAyLjY1NCAxNi41NTJjLS41MTItLjA4MS0xIC4xOTMtMS4zNi42MDdjLS4zNjEuNDEzLS42NjMuOTk1LS45MzMgMS43NzRjLS41MTMgMS40ODMtMi40MjIgNy4xOTMtOS4xMDIgMTIuNzQ2UzczLjEyNiA0Mi41OTUgNTMuNDgzIDQzLjEwMmMtMTguNTU3LjQ0NC0yNi40MDMtMTUuODYtMjYuNDAzLTE1Ljg2bC0xLjAzNS0yLjE0N2wtLjA0IDIuMzg2bC0uMzQgMjEuNWwuMDQ2LjExczEuMTM0IDIuNjM4LS4xMSA2LjAzNHMtNC44OTMgNy42LTE0LjkxMiAxMC41MWwtLjQ5LjE0M2wuMDkuNTA0Yy40OTIgMi42ODUgMi41NjIgNS42ODIgNS43MjEgOC43NjNzNy40MyA2LjIyOCAxMi40MDggOS4wNzhjOS45NTUgNS42OTggMjIuNzMgMTAuMjAyIDM1LjA1MiAxMC40MDlzMjQuMjI4LTMuOTM4IDMyLjE2LTE1LjUxM2M3LjkzNC0xMS41NzUgMTEuODktMzAuNDc0IDguNjU4LTU5LjczOHYtLjAwOHEtLjEzMy0xLjA4OC0uNTA1LTEuNzljLS4yNS0uNDY3LS42MTctLjg1LTEuMTMtLjkzMXptLS4xNzYgMS4xMTZjLjAyNS4wMDQuMTUzLjA2LjMwNi4zNDhjLjE1My4yODcuMy43NjUuMzggMS4zOWMzLjIxNSAyOS4xMS0uNzYgNDcuNzI4LTguNDY3IDU4Ljk3M2MtNy43MDcgMTEuMjQ2LTE5LjE1IDE1LjIyNS0zMS4yMDggMTUuMDIycy0yNC42OTMtNC42NDItMzQuNTA3LTEwLjI2Yy00LjkwOC0yLjgxLTkuMTEtNS45MTMtMTIuMTgtOC45MDZjLTIuOS0yLjgyNy00LjY2Mi01LjUzLTUuMjEtNy43MzRjOS43MzMtMi45NyAxMy43MTYtNy4yODMgMTUuMDcyLTEwLjk4N2MxLjMyLTMuNjA2LjI0NS02LjM5NC4xMzUtNi42NzFsLjMwOC0xOS4zNjVjMi4zMjYgMy44ODggMTAuMzQzIDE1LjE0IDI2LjQwMyAxNC43NTRjMTkuODM5LS41MTEgMzEuNTc3LTUuOTUyIDM4LjQ3MS0xMS42ODNjNi44OTUtNS43MzEgOC45NDYtMTEuNzg2IDkuNDUtMTMuMjQ1Yy4yNC0uNjkxLjUwMy0xLjE1OC43MTUtMS40MDJjLjIxMy0uMjQ0LjMwNy0uMjM4LjMzMi0uMjM0IiAvPgoJPHBhdGggZmlsbD0idXJsKCNTVkdLZWVwaWIzSCkiIGQ9Ik00MS41MDQgNzYuODE0YzE4Ljg5MyAzLjczMiAyOC41MDkuMjI3IDM0LjA1Mi00LjA3MmMtMS40Ny0xLjkyNC00LjA3Mi00LjA3Mi00LjA3Mi00LjA3MnM2LjU2MiAxLjgwOSA4LjkzNyA0Ljg2M2MyLjI2MyAyLjk0MS45MDQgNC44NjUuMjI2IDguNTk4Yy0xLjM1OC0zLjM5NC0zLjg0Ni00LjYzOS00LjE4Ni01Ljk5NmMtNC45NzcgNy4xMjctMTcuNTM1IDYuNzg4LTM0Ljk1Ny42NzkiIC8+Cgk8cGF0aCBmaWxsPSJ1cmwoI1NWR2hZWDdZY3hkKSIgZD0ibTEwMS41NzUgMjMuNzc0bC0xLjA0OCAxLjcyNWMtMS41NTQgMi41NTQtMy44OTMgNS41Ni03LjM1IDguNTc1cS0uMDAyIDAtLjAwNS4wMDRjLTcuMjQ1IDYuMDE0LTE5LjQzMiAxMS41MTQtMzkuNTc1IDExLjk2NWgtLjAwNGMtMTEuNjkuMzM0LTE5LjA4OC01LjMxNS0yMy42NjMtMTAuMzM3bC0uOTQ2LTEuMDM4bC0uMzggMTQuMDUzbC4wMjcuMDg3Yy4zMzggMS4xMjQgMS4wODYgMy42MzctLjIxNSA3LjIyYy0xLjM4NCAzLjcyNi01Ljc2MiA3Ljg1LTEzLjU4NyAxMC44NjlsLS41NjMuMjE3bC4yNTMuNTQ3Yy42NzcgMS40NjggMS40MjUgMy4wNTcgMy42MiA1LjE0bC4wMDYuMDA1bC4wMDUuMDA2YzIuODc1IDIuODc0IDYuOTc3IDUuOTQ2IDExLjc2MSA4LjY4YzkuNTczIDUuNDcgMjEuOTcxIDkuOCAzMy42NDIgMTAuMDI5YzExLjY2OC4yMjggMjIuMzE3LTMuNTk0IDI5LjY2NS0xNC4yNzNsLjAwMi0uMDA0bC4wMDQtLjAwNGM2LjU1NS05Ljg5IDEwLjI4LTI2LjQxNSA4LjM1LTUxLjQ5em0tMS4wODggMy43MTNjMS42MDcgMjMuOTE5LTIuMDE4IDM5Ljc5LTguMjA3IDQ5LjEyOGMtNy4xMzIgMTAuMzU3LTE3LjI5NyAxMy45OTgtMjguNzA0IDEzLjc3NWMtMTEuNDA2LS4yMjUtMjMuNjczLTQuNDkzLTMzLjEwMy05Ljg4MmMtNC43MTQtMi42OTQtOC43NTQtNS43MjYtMTEuNTM0LTguNTA2bC0uMDA1LS4wMDZsLS4wMDYtLjAwNGMtMS44NTgtMS43Ni0yLjUxNS0zLjAxNy0zLjEyMS00LjMwNmM3LjYyOC0zLjA2OCAxMi4xNTMtNy4xODQgMTMuNjctMTEuMjY1bC4wMDItLjAwMnYtLjAwMmMxLjM4LTMuNzk3LjYxNC02LjYxNS4yNi03LjgwNGwuMzAzLTExLjI0NmM0Ljc2NyA0LjkyMSAxMi4yMSAxMC4xMzEgMjMuNTg0IDkuODA2YzIwLjM0NS0uNDU1IDMyLjgxNi02LjAzNSA0MC4yOC0xMi4yMzRsLjAwNi0uMDA0bC4wMDQtLjAwNGEzNy42IDM3LjYgMCAwIDAgNi41NzItNy40NDR6IiBvcGFjaXR5PSIuMTg1IiAvPgoJPHBhdGggZmlsbD0idXJsKCNTVkdzNkdnU1ZaUSkiIGQ9Ik00Ny4wNDcgNTIuNDljMCA2LjMzNy01LjA5IDExLjQyNy0xMS40MjYgMTEuNDI3QTExLjM5MyAxMS4zOTMgMCAwIDEgMjQuMTk1IDUyLjQ5YTExLjM5NCAxMS4zOTQgMCAwIDEgMTEuNDI2LTExLjQyNmM2LjMzNSAwIDExLjQyNiA1LjIwNCAxMS40MjYgMTEuNDI2IiAvPgoJPHBhdGggZmlsbD0iIzg4OGE4NSIgZD0iTTM1LjYyMiA0MC42MjJhMTEuODQ2IDExLjg0NiAwIDAgMC0xMS44NyAxMS44NjhjMCA2LjU3MyA1LjI5NiAxMS44NyAxMS44NyAxMS44N2ExMS44NDUgMTEuODQ1IDAgMCAwIDExLjg2Ny0xMS44N2MwLTYuNDYzLTUuMjktMTEuODY4LTExLjg2Ny0xMS44NjhtMCAuODg1YzYuMDkyIDAgMTAuOTgzIDUuMDAzIDEwLjk4MyAxMC45ODNhMTAuOTQgMTAuOTQgMCAwIDEtMTAuOTgzIDEwLjk4M0ExMC45NCAxMC45NCAwIDAgMSAyNC42MzggNTIuNDlhMTAuOTQgMTAuOTQgMCAwIDEgMTAuOTg0LTEwLjk4MyIgLz4KCTxwYXRoIGZpbGw9InVybCgjU1ZHSWhYa3NiNkEpIiBkPSJNMjQuNDIyIDU2Ljc5YzUuNTQzIDcuNjkzIDUuNTQzIDE2Ljk3LjExMyAyMC45M2MtNS40MyAzLjk1OS0xNC4yNTUuOTA0LTE5Ljc5OS02Ljc4OGMtNS41NDItNy42OTQtNS41NDItMTYuOTctLjExMi0yMC45M2M1LjQzLTMuODQ2IDE0LjI1NC0uNzkxIDE5Ljc5OCA2Ljc4OCIgLz4KCTxwYXRoIGQ9Ik05LjE3NSA0Ny44MTNjLTEuNzY3LjE0NS0zLjQzMi43MDQtNC44NzcgMS43MjhsLS4wMDQuMDAybC0uMDAzLjAwMmMtMi44ODUgMi4xMDQtNC4zMDUgNS42MS00LjI5IDkuNTIzczEuNDQyIDguMjYgNC4yNzYgMTIuMTk1YzIuODM0IDMuOTMzIDYuNTEgNi42OTMgMTAuMjE3IDcuOTY4YzMuNzA3IDEuMjc0IDcuNDg2IDEuMDUyIDEwLjM3NC0xLjA1NWMyLjg4NS0yLjEwMyA0LjMwNi01LjYxIDQuMjkyLTkuNTIzYy0uMDE1LTMuODQ2LTEuNDMxLTguMTA2LTQuMTcyLTExLjk4N3YtLjA2bC0uMTA3LS4xNDVsLS4wMDItLjAwNWMtMi44MzUtMy44NzUtNi41MS02LjYwNi0xMC4yMTUtNy44OGMtMS44NTMtLjYzNy0zLjcyMS0uOTA3LTUuNDg5LS43NjJ6bS4xMDYgMS4xMjNjMS41ODctLjEyOCAzLjI5LjExNyA1LjAxNi43MWMzLjQ1IDEuMTg3IDYuOTU4IDMuNzczIDkuNjY2IDcuNDc1bC4wMDIuMDAyYzIuNzA3IDMuNzU4IDQuMDQ4IDcuODk2IDQuMDYyIDExLjUzNGMuMDEzIDMuNjQtMS4yOCA2Ljc1LTMuODI2IDguNjA2Yy0yLjU0IDEuODUzLTUuODkgMi4wODMtOS4zMzguODk3Yy0zLjQ0OS0xLjE4Ni02Ljk1OS0zLjgtOS42NjgtNy41NnMtNC4wNS03Ljg5Ny00LjA2NC0xMS41MzZjLS4wMTQtMy42MzUgMS4yOC02Ljc0MyAzLjgyLTguNmwuMDAzLS4wMDJjMS4yNjktLjg5NyAyLjc0MS0xLjM5OCA0LjMyNy0xLjUyNiIgLz4KCTxwYXRoIGZpbGw9IiMyZTM0MzYiIGQ9Ik00My44OCA1NC4xODljMCAzLjA1NC0yLjQ4OSA1LjQyOS01LjQzIDUuNDI5Yy0zLjA1NSAwLTUuNDMtMi40ODktNS40My01LjQzczIuNDg5LTUuNDMgNS40My01LjQzczUuNDMgMi4zNzUgNS40MyA1LjQzeiIgLz4KCTxwYXRoIGQ9Ik0zOC40NDkgNDguMDk1Yy0zLjMxNSAwLTYuMDk0IDIuNzc3LTYuMDk0IDYuMDkzYzAgMy4yOTggMi42OCA2LjA5NCA2LjA5NiA2LjA5NGMzLjI5OCAwIDYuMDkzLTIuNjc5IDYuMDkzLTYuMDk0YzAtMy40MTQtMi43OTYtNi4wOTMtNi4wOTUtNi4wOTNtMCAxLjMyOGMyLjU4NCAwIDQuNzY3IDIuMDcyIDQuNzY3IDQuNzY1YTQuNzYgNC43NiAwIDAgMS00Ljc2NSA0Ljc2NmE0Ljc2IDQuNzYgMCAwIDEtNC43NjgtNC43NjZjMC0yLjU2NyAyLjItNC43NjUgNC43NjYtNC43NjUiIC8+Cgk8cGF0aCBmaWxsPSJ1cmwoI1NWR3hHVDVDZTFZKSIgZD0iTTguNzM0IDUwLjg1NmMtMS4yNi4xMTQtMi4zNzUuNTIyLTMuMzMyIDEuMTgzaC0uMDU4bC0uMTUuMTFzMCAuMDAzLS4wMDIuMDAzYy0xLjg3IDEuMzc1LTIuOTQ5IDMuODUtMi44MyA3LjE0NnYuMDAyYy4xMTYgMy4xNzYgMS4yODcgNy4wMTMgMy45NjEgMTAuNTAzYzIuNTU4IDMuMzcyIDUuOTEyIDUuNjk4IDguOTk1IDYuNjQ2YzMuMDQ4LjkzOSA1LjY1Ny43MTYgNy42MzItLjc2NmMxLjk5My0xLjQ5MyAyLjk0My00LjA3NSAyLjk0My03LjI0MWMwLTMuMjA4LTEuMjg5LTcuMDM2LTMuODQ4LTEwLjQxYy0yLjU1My0zLjM2NS01Ljc5OC01LjY5OS04Ljg4My02LjY0OGgtLjAwNmMtMS41ODEtLjQ2OC0zLjA3NS0uNjUtNC40MjItLjUyOG0uMTIyIDEuMTIyYzEuMTctLjEwMyAyLjUwNC4wNTQgMy45NzUuNDljMi43OTYuODYgNS44ODYgMy4wNTEgOC4zMTEgNi4yNDhjMi40MTkgMy4xODggMy42MTkgNi44MjYgMy42MTkgOS43MjZjMCAyLjk0Mi0uODYgNS4xMTQtMi40OSA2LjMzNmMtMS42NDMgMS4yMzItMy43ODYgMS40NjItNi42Mi41OWMtMi44MDItLjg2Mi02LjAwNy0zLjA1OS04LjQyNy02LjI0OXYtLjAwMmgtLjAwMkM0LjY5NCA2NS44MiAzLjYgNjIuMTkgMy40OTIgNTkuMjZjLS4xMDktMy4wMzQuODUtNS4wNzcgMi4zNjctNi4xOTNsLjAxLS4wMDhjLjgxMy0uNjEgMS44MTctLjk3NiAyLjk4Ny0xLjA4eiIgb3BhY2l0eT0iLjI4MSIgLz4KCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy43ODcgNTcuNjk1YzAgMy4yODEtMi4yNjIgNS44ODItNC45NzcgNS44ODJzLTQuOTc4LTIuNi00Ljk3OC01Ljg4MmMwLTMuMjggMi4yNjMtNS44ODMgNC45NzgtNS44ODNjMi44MjggMCA0Ljk3NyAyLjYwMiA0Ljk3NyA1Ljg4M000MC4wMzMgNTEuN2EzLjgxNCAzLjgxNCAwIDAgMS0zLjg0NSAzLjg0NkEzLjgxNiAzLjgxNiAwIDAgMSAzMi4zNCA1MS43YTMuODE1IDMuODE1IDAgMCAxIDMuODQ4LTMuODQ3YTMuODE0IDMuODE0IDAgMCAxIDMuODQ2IDMuODQ3eiIgLz4KCTxwYXRoIGZpbGw9InVybCgjU1ZHd3ZjSkdldVEpIiBkPSJNNzIuNjE1IDUzLjczNmMwIDcuMzUzLTUuOTk1IDEzLjM0OC0xMy4zNSAxMy4zNDhjLTcuMzUyIDAtMTMuMzQ4LTUuOTk1LTEzLjM0OC0xMy4zNDhzNS44ODItMTMuMzUgMTMuMjM1LTEzLjM1YzcuMzU0IDAgMTMuNDYzIDUuOTk3IDEzLjQ2MyAxMy4zNSIgLz4KCTxwYXRoIGZpbGw9IiM4ODhhODUiIGQ9Ik01OS4xNTIgNDAuMDFjLTcuNTU4IDAtMTMuNjEyIDYuMTctMTMuNjEyIDEzLjcyNWMwIDcuNTU4IDYuMTY3IDEzLjcyNyAxMy43MjYgMTMuNzI3czEzLjcyNy02LjE2OSAxMy43MjctMTMuNzI3YzAtNy41NjItNi4yODItMTMuNzI2LTEzLjg0MS0xMy43MjZ6bTAgLjc1M2M3LjE0OSAwIDEzLjA4NSA1LjgyOCAxMy4wODUgMTIuOTcyYzAgNy4xNDgtNS44MjMgMTIuOTcxLTEyLjk3MSAxMi45NzFzLTEyLjk3Mi01LjgyMy0xMi45NzItMTIuOTcxYzAtNy4xNTIgNS43MS0xMi45NzIgMTIuODU4LTEyLjk3MiIgLz4KCTxwYXRoIGZpbGw9IiMyZTM0MzYiIGQ9Ik02OC43NjggNTUuNzczYzAgMy41MDYtMi44MjggNi40NDctNi40NDcgNi40NDdjLTMuNTA4IDAtNi40NS0yLjgyOC02LjQ1LTYuNDQ3YzAtMy42MjIgMi44My02LjQ1IDYuNDQ5LTYuNDVjMy41MDcgMCA2LjQ0OCAyLjgyOCA2LjQ0OCA2LjQ0OXoiIC8+Cgk8cGF0aCBkPSJNNjIuMzE5IDQ4Ljc1OGMtMy45MTQgMC03LjAxMyAzLjA5OS03LjAxMyA3LjAxNWMwIDMuOTI2IDMuMjAzIDcuMDEzIDcuMDE1IDcuMDEzYzMuOTI1IDAgNy4wMTItMy4yMDMgNy4wMTItNy4wMTN2LS4wMDJjMC0zLjkyNy0zLjIwMy03LjAxMy03LjAxNC03LjAxM20wIDEuMTNjMy4yMDMgMCA1Ljg4NCAyLjU2OSA1Ljg4NCA1Ljg4M3YuMDAyYzAgMy4yMDEtMi41NyA1Ljg4Mi01Ljg4MiA1Ljg4MmMtMy4yMDQgMC01Ljg4NS0yLjU3LTUuODg1LTUuODgyYzAtMy4zMjcgMi41NTgtNS44ODQgNS44ODMtNS44ODR6IiAvPgoJPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTY0LjM1NyA1Mi43MThjMCAyLjQ4OS0yLjAzNiA0LjQxMS00LjQxMiA0LjQxMXMtNC40MTItMi4wMzYtNC40MTItNC40MTFjMC0yLjQ5IDIuMDM2LTQuNDEyIDQuNDExLTQuNDEyYzIuMzc2IDAgNC40MTIgMi4wMzYgNC40MTIgNC40MTJ6IiAvPgoJPHBhdGggZmlsbD0idXJsKCNTVkdSbEJiaWJHVCkiIGQ9Im05OS45NjYgOTMuNjQxbDIuNTk3LTUuMTc4Yy05LjY2NC03LjA3Ny0yNy40My0xMi4xOTYtMjcuNDMtMTIuMTk2Yy0zLjA2NS0xLjQ0Ni00LjA2NSAxLjM0Mi0xLjkwMSAzLjE1Yy0uMDQ0LjAxMyAxNS4xNjIgMTAuOTIzIDI2LjczNCAxNC4yMjQiIC8+Cgk8cGF0aCBmaWxsPSIjNjczOTA3IiBkPSJNNzEuNjM4IDc4LjEyNWMuMTg5LjU3NS41ODcgMS4xNDEgMS4xNDUgMS42MzR2LjAwMnMuMDUxLjA2LjA2Mi4wN2MuMDE0LjAxMy4wMTguMDE1LjAyNC4wMmwuMDE0LjAxM2wuMDQ2LjAzNmwuMTM1LjFxLjE3NC4xMjcuNTAzLjM2Yy40MzguMzA4IDEuMDc2Ljc1IDEuODggMS4yOWExNTAgMTUwIDAgMCAwIDYuNTA1IDQuMTMyYzUuMjYzIDMuMTU0IDExLjk3NyA2LjcyNiAxNy44NTggOC40MDRsLjQ1MS4xMjhsLjIxLS40MTlsMi44MTItNS42MDZsLS4zODYtLjI4MkM5My4wNzIgODAuODEgNzUuMjkgNzUuNzIzIDc1LjI5IDc1LjcyM2wuMDg1LjAzMmMtLjg0LS4zOTctMS41OS0uNTMxLTIuMjM0LS40MThzLTEuMTY5LjUwOC0xLjQyNyAxLjAzNmMtLjI1OC41MjktLjI3NiAxLjE0Mi0uMDc1IDEuNzUyem0xLjA5NC0uMzMyYy0uMTI1LS4zNzctLjEwNy0uNzEtLjAwMi0uOTIzYy4xMDQtLjIxNC4yNjktLjM1OS42MDYtLjQxOGMuMzM4LS4wNi44NjMgMCAxLjU1NS4zMjdsLjA0MS4wMmwuMDQzLjAxMnMxNy4yNyA1LjAyOCAyNi44NTUgMTEuODUxbC0yLjE0OCA0LjI4MmMtNS41OTUtMS42NzQtMTIuMDU2LTUuMDgyLTE3LjE0OC04LjEzNGExNDkgMTQ5IDAgMCAxLTYuNDU1LTQuMWExMDUgMTA1IDAgMCAxLTIuMzQ5LTEuNjI1bC0uMTE2LS4wODdsLS4wMDYtLjAwNGwtLjAxNC0uMDExYy0uNDctLjM5My0uNzM3LS44MTQtLjg2Mi0xLjE5IiAvPgoJPHBhdGggZmlsbD0idXJsKCNTVkdIWjgzZmRVbSkiIGQ9Im0xMTIuMzU5IDk4LjQyN2wxLjM4OS0zLjA5NWwtMTAuNzYyLTYuODk3bC0uODQxLS4wODhsLS4zNTEtMS4xOTFjLTEuNTc4Ljk5Mi0zLjgxNSA0LjYyNS0zLjIxNyA2LjY1NWwxLjE2NS0uNDRsLjYxOC42MzN6IiAvPgoJPHBhdGggZmlsbD0iIzg4OGE4NSIgZD0ibTk4LjIwNiA5NC41NTZsMS4zOS0uNTI0bC40NDkuNDZsMTIuNjEzIDQuNjQ5bC4yMTctLjQ4MmwxLjU4OS0zLjU0bC0xMS4yODYtNy4yMzNsLS41OTctLjA2M2wtLjQ1NS0xLjU0NGwtLjYzNC4zOTdjLS45NS41OTgtMS45MDQgMS43OTktMi42MjIgMy4xNTRjLS43MTkgMS4zNTUtMS4yMTUgMi44NTUtLjgzNiA0LjE0MXptLjkzNy0xLjU2M2MuMDEtLjc1NC4yMjYtMS42ODkuNzI2LTIuNjMzYTguOCA4LjggMCAwIDEgMS42NC0yLjE2OGwuMi42NzhsMS4wODUuMTEzbDEwLjIzOCA2LjU2MmwtLjk3MyAyLjE2OGwtMTEuMzgzLTQuMTk2bC0uNzg3LS44MDZ6IiAvPgoJPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEwNC44MzkgOTIuMzU0YS41NjYuNTY2IDAgMCAwIC4yOTYuNzQ0bDcuMTQgMy4wNzRhLjU2Ni41NjYgMCAwIDAgLjc0NC0uMjk2YS41NjYuNTY2IDAgMCAwLS4yOTYtLjc0NGwtNy4xNC0zLjA3NGEuNTY2LjU2NiAwIDAgMC0uNzQ0LjI5NiIgLz4KCTxwYXRoIGZpbGw9InVybCgjU1ZHSDBZUVNkb2UpIiBkPSJNMTI4IDExMS40NjJjLTMuMzU3LTExLjM4Mi00LjU1Mi0yMC40NzctMTMuMzI4LTE5LjY2NGMtNy4wOTYuNjU0LTcuNTY3IDEwLjc2OC0uMjU4IDEzLjZjNy4wMzcgMi43MiAxMy41ODYgNi4wNjQgMTMuNTg2IDYuMDY0IiAvPgoJPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTExNS4xOTIgOTIuNzQ4YTIuOTY1IDIuOTY1IDAgMCAxIDMuNjU2IDEuOTlhMi45NjUgMi45NjUgMCAwIDEtMS45OSAzLjY1N2EyLjk2NSAyLjk2NSAwIDAgMS0zLjY1Ny0xLjk5YTIuOTY1IDIuOTY1IDAgMCAxIDEuOTkxLTMuNjU3IiBvcGFjaXR5PSIuNTI4IiAvPgoJPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEwMi4zNTUgODguNTczYTEuOTYzIDEuOTYzIDAgMCAxIDIuNDU3IDEuMzM3YTEuOTYzIDEuOTYzIDAgMCAxLTEuMzM4IDIuNDU3YTEuOTYzIDEuOTYzIDAgMCAxLTIuNDU2LTEuMzM4YTEuOTYzIDEuOTYzIDAgMCAxIDEuMzM3LTIuNDU2IiAvPgoJPHBhdGggZmlsbD0idXJsKCNTVkdkYkEyYmI2RykiIGQ9Ik0xMjMuNzg1IDEwNC42NDlzLTEuMTA5LTQuMDg1LTMuNTA5LTYuMjA3Yy0uODQ3LS43NTcuMjEyLTEuODg1IDEuMDM1LS44OGMxLjcxNyAyLjA4MyAyLjQ3NCA3LjA4NyAyLjQ3NCA3LjA4NyIgb3BhY2l0eT0iLjQyOCIgLz4KCTxwYXRoIGZpbGw9InVybCgjU1ZHakJaOERiZkMpIiBkPSJNNjEuODY4IDgxLjQ1MmM0LjE4NS40NTMgOC4wMzEtLjc5MiA5LjUwMi0xLjM1N2MuMjI3LTEuNTg1IDEuNDcxLTQuNTI1IDUuNzctNC43NTFsLTEuNDctMi42MDJzLTUuNTQ0IDMuNzMyLTExLjQyNyA0Ljg2NHoiIC8+Cjwvc3ZnPgo="
                alt="Gimp"
                className={iconClass}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                Gimp
              </span>
            </div>
            <div
              className="group relative flex items-center justify-center outline-none"
              tabIndex={0}
              aria-label="Procreate"
            >
              <img
                src="https://cdn.brandfetch.io/id3MSxhWf4/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"
                alt="Procreate"
                className={iconClass + "rounded-xl"}
              />
              <span
                className="font-mono pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0d0d0d]/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                role="tooltip"
              >
                Procreate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

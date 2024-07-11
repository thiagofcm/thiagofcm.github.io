import { createSignal, Match, onMount, Switch } from "solid-js";

const Header = () => {
  const [theme, setTheme] = createSignal("");

  onMount(() => {
    setTheme(localStorage.theme || "light");
  });

  const handleThemeClick = () => {
    if (localStorage.theme === "dark") {
      setTheme("light");
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <header class="fixed inset-x-0 top-4 z-10 w-full lg:sticky lg:max-w-[900px]">
      <nav class="flex w-full justify-center">
        <ul class="flex overflow-hidden rounded-full border-2 border-neutral-300 bg-neutral-100 px-3 text-sm font-semibold dark:border-neutral-700 dark:bg-neutral-900">
          <li>
            <a href="#about-me" id="about-me-link" class="flex h-full px-3 py-2 hover:text-purple-600 dark:hover:text-purple-400">
              About
            </a>
          </li>
          <li>
            <a href="#experience" id="experience-link" class="flex h-full px-3 py-2 hover:text-purple-600 dark:hover:text-purple-400">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" id="projects-link" class="flex h-full px-3 py-2 hover:text-purple-600 dark:hover:text-purple-400">
              Projects
            </a>
          </li>
          <li>
            <button id="darkModeButton" class="px-3 py-2" onClick={handleThemeClick}>
              <Switch>
                <Match when={theme() === "light"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 text-purple-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                </Match>
                <Match when={theme() === "dark"}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                </Match>
              </Switch>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

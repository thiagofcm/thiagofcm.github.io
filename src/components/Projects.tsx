import { createSignal, For } from "solid-js";

const Projects = ({ projects }: { projects: Project[] }) => {
  const categories = ["All", "Robots", "Eletronics"];

  const [filteredProjects, setFilteredProjects] = createSignal(projects);
  const [currentCategory, setCurrentCategory] = createSignal("All");

  const handleFilterClick = (category: string) => {
    setCurrentCategory(category);

    if (category === "All") {
      setFilteredProjects(projects);
      return;
    }

    setFilteredProjects(projects.filter((project) => project.category === category));
  };

  return (
    <>
      <div class="mt-8">
        <ul class="inline-flex divide-x-2 divide-purple-600 overflow-hidden rounded-xl border-2 border-purple-600 dark:divide-purple-400 dark:border-purple-400">
          <For each={categories}>
            {(category) => (
              <li>
                <button
                  class={`px-4 py-1 ${currentCategory() === category && "bg-purple-600 text-neutral-100 dark:bg-purple-400"}`}
                  onClick={[handleFilterClick, category]}
                >
                  {category}
                </button>
              </li>
            )}
          </For>
        </ul>
      </div>

      <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <For each={filteredProjects()}>
          {(project) => (
            <a
              class="group overflow-hidden rounded-xl border-2 border-neutral-200 hover:bg-neutral-200 dark:border-neutral-800 dark:hover:bg-neutral-800"
              href={project.href}
            >
              <img class="h-40 w-full object-cover" src={project.image} alt="" />
              <div class="flex flex-col gap-2 p-4">
                <h4 class="font-semibold">{project.title}</h4>
                <p class="text-neutral-600 dark:text-neutral-400">{project.body}</p>
                <div class="flex items-center gap-2 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    ></path>
                  </svg>

                  {project.href}
                </div>
              </div>
            </a>
          )}
        </For>
      </div>
    </>
  );
};

export default Projects;

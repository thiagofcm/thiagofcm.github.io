import type { CollectionEntry } from "astro:content";
import { createSignal, For } from "solid-js";

const Projects = ({ projects }: { projects: CollectionEntry<"projects">[] }) => {
  const categories = ["All", "Robotics", "Eletronics"];

  const [filteredProjects, setFilteredProjects] = createSignal(projects);
  const [currentCategory, setCurrentCategory] = createSignal("All");

  const handleFilterClick = (category: string) => {
    setCurrentCategory(category);

    if (category === "All") {
      setFilteredProjects(projects);
      return;
    }

    setFilteredProjects(projects.filter((project) => project.data.category === category));
  };

  return (
    <>
      <div class="mt-8">
        <ul class="inline-flex divide-x-2 divide-purple-600 overflow-hidden rounded-xl border-2 border-purple-600 dark:divide-purple-400 dark:border-purple-400">
          <For each={categories}>
            {(category) => (
              <li>
                <button
                  class={`px-4 py-1 ${currentCategory() === category ? "bg-purple-600 font-medium text-neutral-100 dark:bg-purple-400" : "hover:font-medium hover:text-purple-600 dark:hover:text-purple-400"}`}
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
              class="group flex flex-col overflow-hidden rounded-xl border-2 border-neutral-200 hover:bg-neutral-200 dark:border-neutral-800 dark:hover:bg-neutral-800"
              href={`/projects/${project.slug}`}
            >
              <img class="h-40 w-full object-cover" src={project.data.image} alt="" />
              <div class="flex h-full flex-col gap-2 p-4">
                <h4 class="font-semibold">{project.data.title}</h4>
                <p class="flex-grow text-neutral-600 dark:text-neutral-400">{project.data.summary}</p>
                <div class="flex items-center gap-2 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                    <path
                      fill-rule="evenodd"
                      d="M4.5 2A2.5 2.5 0 0 0 2 4.5v2.879a2.5 2.5 0 0 0 .732 1.767l4.5 4.5a2.5 2.5 0 0 0 3.536 0l2.878-2.878a2.5 2.5 0 0 0 0-3.536l-4.5-4.5A2.5 2.5 0 0 0 7.38 2H4.5ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  {project.data.category}
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

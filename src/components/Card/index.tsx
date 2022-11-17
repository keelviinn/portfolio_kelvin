import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiLink } from "react-icons/fi";

export const RepoCard = ({ repo }: { repo: Repo }) => {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-md p-8 hover:shadow-lg hover:-mt-2 bg-gray-100 dark:bg-gray-700 transition-all duration-300 h-60">
      <div className="justify-between sm:flex">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">
            {repo.name}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-400">
            By {repo.owner_login}
          </p>
        </div>

        <div className="mt-4 flex gap-2">
          {repo.page && (
            <Link href={`${repo.page}`} legacyBehavior>
              <a target="_blank">
                <FiLink className="w-6 h-6 text-gray-400 dark:text-gray-200 cursor-pointer ml-2" />
              </a>
            </Link>
          )}
          <Link href={repo.url} legacyBehavior>
            <a target="_blank">
              <FiExternalLink className="w-6 h-6 text-gray-400 dark:text-gray-200 cursor-pointer" />
            </a>
          </Link>
        </div>
      </div>

      <div className="mt-4 sm:pr-8">
        <p className="text-sm text-gray-500 dark:text-gray-300">{repo.description}</p>
      </div>

      <dl className="mt-6 flex gap-6">
        <dd className="text-xs text-gray-500 dark:text-gray-300">
          {format(new Date(repo.created_at), "MMMM dd, yyyy")}
        </dd>

        <dd className="text-xs text-gray-500 dark:text-gray-300">{repo.language}</dd>
      </dl>
    </div>
  );
};

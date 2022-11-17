import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiLink } from "react-icons/fi";

export const RepoCard = ({ repo }: { repo: Repo }) => {
  return (
    <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-8">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-cyan-200 to-cyan-700"></span>

      <div className="justify-between sm:flex">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-300">{repo.name}</h3>

          <p className="mt-1 text-xs font-medium text-gray-600">
            By {repo.owner_login}
          </p>
        </div>

        <div className="mt-4 flex gap-2">
          {repo.page && (
            <Link href={`${repo.page}`} legacyBehavior>
              <a target="_blank">
                <FiLink className="w-6 h-6 text-gray-400 cursor-pointer ml-2" />
              </a>
            </Link>
          )}
          <Link href={repo.url} legacyBehavior>
            <a target="_blank">
              <FiExternalLink className="w-6 h-6 text-gray-400 cursor-pointer" />
            </a>
          </Link>
        </div>
      </div>

      <div className="mt-4 sm:pr-8">
        <p className="text-sm text-gray-500">{repo.description}</p>
      </div>

      <dl className="mt-6 flex">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Created</dt>
          <dd className="text-xs text-gray-500">
            {format(new Date(repo.created_at), "MMMM dd, yyyy")}
          </dd>
        </div>

        <div className="ml-3 flex flex-col-reverse sm:ml-6">
          <dt className="text-sm font-medium text-gray-600">Language</dt>
          <dd className="text-xs text-gray-500">{repo.language}</dd>
        </div>
      </dl>
    </div>
  );
};

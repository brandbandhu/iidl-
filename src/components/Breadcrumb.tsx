import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  items: { label: string; path?: string }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => (
  <nav className="container-main px-4 sm:px-6 lg:px-8 py-4" aria-label="Breadcrumb">
    <ol className="flex items-center gap-2 text-sm text-muted-foreground">
      <li>
        <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
          <Home className="w-3.5 h-3.5" />
          Home
        </Link>
      </li>
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-2">
          <ChevronRight className="w-3.5 h-3.5" />
          {item.path ? (
            <Link to={item.path} className="hover:text-primary transition-colors">{item.label}</Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;

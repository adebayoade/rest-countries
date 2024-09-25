import { MoonIcon } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="py-4 shadow-sm">
      <div className="container justify-between flex gap-5">
        <h2 className="text-2xl font-semibold">Where in the world?</h2>

        <div className="flex gap-5">
          <MoonIcon />
        </div>
      </div>
    </nav>
  );
}

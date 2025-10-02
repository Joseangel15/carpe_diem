import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link href={"/"} className="btn btn-ghost text-xl">CARPE DIEM</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/link"}>Link</Link>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link href={"/link1"}>Link 1</Link>
                  </li>
                  <li>
                    <Link href={"/link2"}>Link 2</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

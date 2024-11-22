import { Search } from "./Search";

export const Header = () => {
    return (
        <header className="z-40 top-0 fixed flex w-full h-100px bg-slate-600 items-center">
            <h1 className="mr-auto text-white text-xl"><a className="p-6" href="/">ブランド収集</a></h1>
            <nav>
                <ul>
                    <li className="inline-block"><Search /></li>
                    <li className="none inline-block ml-5 text-white"><a className="p-6" href="/">ホーム</a></li>
                    <li className="none inline-block p-6 text-white"><a className="p-6" href="/">コンタクト</a></li>
                    <li className="none inline-block p-6 text-white"><a className="p-6" href="/">ログイン</a></li>
                </ul>
            </nav>
        </header>
    );
}

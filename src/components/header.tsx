import { Search } from "./Search";

export const Header = () => {
    return (
        <header className="flex w-100 h-100px bg-slate-600 items-center">
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

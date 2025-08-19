import Navigation from "./UI/Navigation";

export default function Header() {
    const menu = ['welcome', 'products'];
    
    return (
        <header className="min-w-screen bg-neutral-800 py-8">
            <Navigation items={menu} />
            
        </header>
    );
}
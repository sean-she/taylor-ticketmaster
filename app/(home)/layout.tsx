import NavBar from "../_components/navbar";

const HomeLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full bg-black">
            <NavBar />
            <main>
                {children}
            </main>
        </div>
    );
}
 
export default HomeLayout;
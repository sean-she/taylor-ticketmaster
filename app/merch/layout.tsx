import NavBar from "../_components/navbar";

const AboutLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <NavBar />
            <main>
                {children}
            </main>
        </div>
    );
}
 
export default AboutLayout;
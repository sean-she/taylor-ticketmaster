import NavBar from "../_components/navbar";

const EventsLayout = ({
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
 
export default EventsLayout;
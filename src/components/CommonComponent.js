import './Common.css'
function CommonComponent(props) {
    return (
        <div className="CommonComponent">
            {/* Print the props text below */}
            <h2>{props.text}</h2>
        </div>
    );
}

export default CommonComponent;
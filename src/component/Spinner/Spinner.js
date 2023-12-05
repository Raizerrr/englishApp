import './index.css';

export const Spinner = () => {
    return (
        <div style={{
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            margin: "20rem"
        }}>
        
            <div id="loading"></div>
        </div>
    )
}
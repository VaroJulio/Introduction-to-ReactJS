var title = "Welcome to React Transportation";
var description = "The best place to buy vehicles online";

function HeaderTitle(props){
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
        </div>
    );
}

ReactDOM.render(
    <HeaderTitle title={title} description={description}/>,
    document.getElementById("root")
);

function isEmptyBlanckWOrOnlyWhiteSpace(prop){
    return (!prop || 0 === str.length || /^\s*$/.test(str) || !prop.trim())
}
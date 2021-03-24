export default function SearchResultsItem(value){
    return (
        <div style={{
            backgroundColor:"grey",
            marginTop:"1rem",
            marginBottom:"1rem",
            padding:10,
            width:"100%"
            }}>
            <p>{value.name}</p>
            <p>{value.username}</p>

        </div>
    )
}
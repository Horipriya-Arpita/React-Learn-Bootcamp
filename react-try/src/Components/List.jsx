const array = [11,11,3,4];


const arraylist = array.map((a,index) => (
    <li key={index}>{a}</li>
));


const user = [
    {
        id: 1,
        name: "Arpita",
    },

    {
        id: 2,
        name: "Horipriya",
    }
]

const userList = user.map((u,index) => (
    
    <ul key={index}>
        <li>{u.id}</li>
        <li>{u.name}</li>
    </ul>
))

const List = () => {


    return (
        <div>
            {arraylist}
            {userList}
        </div>
    )
}

export default List
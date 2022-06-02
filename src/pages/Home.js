import { useState } from 'react'

const Home = () => {
    const [expanded, setExpanded] = useState([])
    const tbl = [
        {
            id: 1,
            author: "Jan Kowalski",
            title: "Pilne: Co to był za dzień!",
            intro: "Tego świat jeszcze nie widział. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam eos dignissimos aperiam rerum qui suscipit cum nobis, totam ea tenetur perferendis praesentium corporis possimus ducimus et minima voluptatum. Numquam mollitia culpa consectetur unde illum est aut dicta eligendi vero molestias impedit sint, maiores saepe voluptas necessitatibus excepturi ducimus repudiandae, non quidem nobis veritatis! Libero neque, cumque illo est corrupti eaque recusandae ipsum, ut debitis vitae molestias deleniti voluptates distinctio sapiente autem. Tempore aperiam minima sit atque, tempora doloribus blanditiis id ipsum. Distinctio quos nisi, totam sunt ex voluptatum? Neque alias laborum ipsum doloremque fuga earum in autem. Hic alias omnis facilis facere eum assumenda deleniti ad, maiores laudantium temporibus odio non, molestiae dolorum! Quo mollitia ex sapiente maiores excepturi?"
        },
        {
            id: 2,
            author: "Jan Nowak",
            title: "Wszyscy zazdroszą Polakom!",
            intro: "Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam eos dignissimos aperiam rerum qui suscipit cum nobis, totam ea tenetur perferendis praesentium corporis possimus ducimus et minima voluptatum. Numquam mollitia culpa consectetur unde illum est aut dicta eligendi vero molestias impedit sint, maiores saepe voluptas necessitatibus excepturi ducimus repudiandae, non quidem nobis veritatis! Libero neque, cumque illo est corrupti eaque recusandae ipsum, ut debitis vitae molestias deleniti voluptates distinctio sapiente autem. Tempore aperiam minima sit atque, tempora doloribus blanditiis id ipsum. Distinctio quos nisi, totam sunt ex voluptatum? Neque alias laborum ipsum doloremque fuga earum in autem. Hic alias omnis facilis facere eum assumenda deleniti ad, maiores laudantium temporibus odio non, molestiae dolorum! Quo mollitia ex sapiente maiores excepturi?"
        },
        {
            id: 3,
            author: "Grzegorz Brzęczyszczykiewicz",
            title: "Adam Małysz Zgolił wąs",
            intro: "Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam eos dignissimos aperiam rerum qui suscipit cum nobis, totam ea tenetur perferendis praesentium corporis possimus ducimus et minima voluptatum. Numquam mollitia culpa consectetur unde illum est aut dicta eligendi vero molestias impedit sint, maiores saepe voluptas necessitatibus excepturi ducimus repudiandae, non quidem nobis veritatis! Libero neque, cumque illo est corrupti eaque recusandae ipsum, ut debitis vitae molestias deleniti voluptates distinctio sapiente autem. Tempore aperiam minima sit atque, tempora doloribus blanditiis id ipsum. Distinctio quos nisi, totam sunt ex voluptatum? Neque alias laborum ipsum doloremque fuga earum in autem. Hic alias omnis facilis facere eum assumenda deleniti ad, maiores laudantium temporibus odio non, molestiae dolorum! Quo mollitia ex sapiente maiores excepturi?"
        }
    ]

    function handleClick(elem_id) {
        if (expanded[elem_id] === true) {
            expanded[elem_id] = false
        }
        else if (expanded[elem_id] === false || expanded[elem_id] === undefined) {
            expanded[elem_id] = true
        }
        console.log(expanded)
        setExpanded([...expanded])
        return
    }

    const styles = {
        margin: 5,
        marginBottom: 30,
        padding: 10
    }


    return (
        <div>
            <h2>Mini serwis informacyjny</h2>

            {tbl.map((elem, index) => (
                <div style={styles}>
                    <h3>{elem.title}</h3>
                    <p>Autor: {elem.author}</p>
                    {expanded[elem.id] ? <p>{elem.intro}</p> : <p>{elem.intro.substring(0, 25) + "..."}</p>}
                    <button key={index} onClick={() => handleClick(elem.id)}>Rozwiń/Zwiń</button>
                    <p>Czytaj pełny artykuł:<a href="#">Link</a></p>
                </div>
            ))}
        </div>
    )
};

export default Home;
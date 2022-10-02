import Link from "next/link";
import style from "../styles/index.module.scss";

function Home() {
  const projects: Project[] = [
    {
      name: "Snake",
      image: "",
      support: ["desktop"]
    }
  ];

  return (
    <div
      className={style.container}
    >
      <h1>Projetos hospedados:</h1>
      <div className={style.list}>
        {projects.map(p => {
          const name = p.name.toLocaleLowerCase().replace(/ /g, "-");
          return (
            <Link href={`/${name}`} key={name}>
              <div className={style.item}>
                <div className={style.body}>
                  <h1>{p.name}</h1>
                </div>
                <div className={style.banner} style={{
                  backgroundImage: `url("/banners/${name}.png")`
                }}/>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
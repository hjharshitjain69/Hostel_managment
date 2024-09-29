import { TeamCard } from "./TeamMember";
function About() {

  const harshit = {
    name: "Harshit",
    designation: "Front End Engineer",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  const ishita = {
    name: "Ishita",
    designation: "Backend End Engineer",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  const mishthi = {
    name: "Mishthi",
    designation: "Front End Developer",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  

  return (
    <>
      <h1 className="font-bold text-white text-center text-5xl">
        Meet Our Team!
      </h1>
      <div className="py-20 sm:py-25 flex gap-10 flex-wrap justify-center align-center">
        <TeamCard member={harshit} />
        <TeamCard member={ishita} />
        <TeamCard member={mishthi} />
      </div>
    </>
  );
}
export { About };

import { collection, getDocs } from "@firebase/firestore";
import { db } from "./firebase";

export async function getSkills() {
  const skills = collection(db, "skills");
  const skillsSnapshot = await getDocs(skills);
  return skillsSnapshot.docs.map((doc) => doc.data());
}

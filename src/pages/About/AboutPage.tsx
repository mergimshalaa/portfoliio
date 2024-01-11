import { BackendList } from "./DevStack/BackendList";
import { FrontendList } from "./DevStack/FrontendList";

export function AboutPage() {
  return (
    <>
      <div>about me</div>
      <FrontendList />
      <BackendList /> 
    </>
  );
}
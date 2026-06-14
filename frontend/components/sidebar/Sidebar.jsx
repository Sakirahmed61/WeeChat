import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = () => {
  return (
    <div className="md:min-w-[320px] sm:min-w-[140px] flex flex-col gap-2 p-3 border-r border-slate-400">
      <SearchInput />
      <div className="divider my-1"></div>
      <Conversations />
      <LogoutButton />
    </div>
  )
}

export default Sidebar
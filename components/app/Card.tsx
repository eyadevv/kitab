import Image from "next/image"
import Link from "next/link"
const Card = ({data , type} : any) => {
  const {name , country , _count } = data
  return (
    <Link href='/' className='w-max h-max min-h-[6rem]  justify-center items-center min-w-[12rem] p-4 bg-white rounded-xl bg-opacity-5 flex flex-row gap-2 hover:bg-opacity-20' >


    <div className={`w-20 h-20 bg-white bg-opacity-5 rounded-full text-center text-xs ${type ==='author'?'':'hidden'}`} >
        <Image src={''} alt={name} width={100} height={100} className="rounded-full" />
      </div>
      <div className="w-max flex flex-col gap-1" >
        <div className="gap-4 flex flex-row justify-center items-center w-max h-max">
        <p className="text-xl font-semibold" >{name}</p>
        {/* <p>{country}</p> */}
        </div>
        <p className="text-sm font-normal" >Books: {_count?.books}</p>
      </div>
    </Link>
  )
}
export default Card
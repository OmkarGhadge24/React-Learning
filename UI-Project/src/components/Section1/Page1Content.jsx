import LeftContent from './LeftContent'
import RightContent from './RightContent'


const Page1Content = () => {
  return (
    <div className='py-3 px-10 h-[90vh] flex gap-4 items-center'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default Page1Content
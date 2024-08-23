import Link from 'next/link';
import EditIcon from '@mui/icons-material/Edit';

interface TaskEditButtonProps {
  id: string;
}

const TaskEditButton: React.FC<TaskEditButtonProps> = ({ id }) => {
  return (
    <Link href={`/edit/${id}`}>
        <EditIcon/>
      {/* <FaPen className='hover:text-gray-700 text-lg cursor-pointer'/> */}
    </Link>
  )
}

export default TaskEditButton
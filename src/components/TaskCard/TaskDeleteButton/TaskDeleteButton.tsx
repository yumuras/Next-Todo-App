import DeleteIcon from '@mui/icons-material/Delete';

interface TaskDeleteButtonProps {
    id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
    return (
        <form action="">
            <button type='submit' className='hover:text-gray-700 
        text-lg cursor-pointer'>
                <DeleteIcon/>
            </button>
        </form>
    )
}

export default TaskDeleteButton
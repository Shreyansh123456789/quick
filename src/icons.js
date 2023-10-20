import { BsThreeDots, BsFillCheckCircleFill } from 'react-icons/bs';
import { RiErrorWarningFill } from 'react-icons/ri';
import { FcCancel, FcOvertime, FcProcess } from 'react-icons/fc';
import { LuListTodo } from 'react-icons/lu';
import {
  MdSignalCellularAlt1Bar,
  MdSignalCellularAlt2Bar,
  MdSignalCellularAlt,
} from 'react-icons/md';

// Define a collection of icons for different priorities and statuses
const icons = {
  0: <BsThreeDots size={20} color='green' />, // Priority 0
  1: <MdSignalCellularAlt1Bar size={20} />, // Priority 1
  2: <MdSignalCellularAlt2Bar size={20} />, // Priority 2
  3: <MdSignalCellularAlt size={20} />, // Priority 3
  4: <RiErrorWarningFill size={20} color='orange' />, // Priority 4
  Backlog: <FcOvertime size={20} />, // Backlog status
  Todo: <LuListTodo size={20} />, // Todo status
  'In progress': <FcProcess size={20} />, // In progress status
  Done: <BsFillCheckCircleFill size={20} color='green' />, // Done status
  Canceled: <FcCancel size={20} />, // Canceled status
};

export default icons;

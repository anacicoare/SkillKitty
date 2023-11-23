import { notifications } from '@mantine/notifications';
import { IconAlertCircle, IconAlertCircleFilled, IconAlertTriangle, IconAlertTriangleFilled, IconCheck, IconX } from '@tabler/icons-react';
interface Notify {
    error: (message: any, autoClose?: any, title?: any) => void;
    info: (message: any, autoClose?: any, title?: any) => void;
    warning: (message: any, autoClose?: any, title?: any) => void;
    success: (message: any, autoClose?: any, title?: any) => void;
}

const Notify: Notify = {
    error: (message: any, autoClose: any = 6000, title: any = "") => {
        // show error notification using mantine
        notifications.show({
            title: title,
            message: <span>{message}</span>,
            color: 'red',
            autoClose: autoClose,
            icon: <IconX size="1.1rem" />
        });
    },
    info: (message: any, autoClose: any = 6000, title: any = "") => {
        // show information notification using mantine
        notifications.show({
            title: title,
            message: <span>{message}</span>,
            color: 'blue',
            autoClose: autoClose,
            icon: <IconAlertCircleFilled size="1.1rem" />
        });
    },
    warning: (message: any, autoClose: any = 6000, title: any = "") => {
        // show warning notification using mantine
        notifications.show({
            title: title,
            message: <span>{message}</span>,
            color: 'orange',
            autoClose: autoClose,
            icon: <IconAlertTriangleFilled size="1.1rem" />
        });
    },
    success: (message: any, autoClose: any = 6000, title: any = "") => {
        // show success notification using mantine
        notifications.show({
            title: title,
            message: <span>{message}</span>,
            color: 'green',
            autoClose: autoClose,
            icon: <IconCheck size="1.1rem" />
        });
    },
};

export default Notify;

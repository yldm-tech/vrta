import { format, formatDistanceToNow } from 'date-fns';

export function fDate(date: string): string {
    return format(new Date(date), 'dd MMMM yyyy');
}

export function fDateTime(date: string): string {
    return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export function fDateTimeSuffix(date: string): string {
    return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fToNow(date: string): string {
    return formatDistanceToNow(new Date(date), {
        addSuffix: true
    });
}

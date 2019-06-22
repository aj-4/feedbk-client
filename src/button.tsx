import React from 'react'
import Fab from '@material-ui/core/Fab';
import ChatBubble from '@material-ui/icons/ChatBubble';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

interface Props {
    setOpen: (arg0: boolean) => void,
    open: boolean
}

export default function({setOpen, open}: Props) {
    return (
        <Zoom in={!open} style={{ transitionDelay: !open ? '500ms' : '0ms' }}>
            <Tooltip title="Leave feedback">
                <Fab color="primary" aria-label="Add" onClick={() => setOpen(true)}>
                    <ChatBubble />
                </Fab>
            </Tooltip>
        </Zoom>
    )
}
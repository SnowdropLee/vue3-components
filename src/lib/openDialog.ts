import Dialog from './Dialog.vue';
import { createApp, h } from 'vue';
type OKFUNC = () => void

type CANCLEFUNC = () => void

interface Options {
    title: string,
    content: string,
    okfunc?: OKFUNC,
    canclefunc?: CANCLEFUNC,
    closeoverlay?: boolean,
    cancletext?: string,
    confirmtext?: string
}
export const openDialog = (options: Options) => {
    const { title, content, canclefunc, okfunc, closeoverlay, cancletext, confirmtext } = options
    const div = document.createElement('div')
    document.body.appendChild(div)
    const app = createApp({
        render() {
            return h(
                Dialog,
                {
                    visible: true,
                    'onUpdate:visible': (newVisible) => {
                        if (newVisible === false) {
                            app.unmount(div)
                            div.remove()
                        }
                    },
                    canclefunc, okfunc, closeoverlay, cancletext, confirmtext

                },
                {
                    title,
                    content,

                }
            )
        }
    })
    app.mount(div)
    // app.unmount()
}
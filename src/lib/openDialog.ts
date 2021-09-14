import Dialog from './Dialog.vue';
import { createApp, h } from 'vue';

export const openDialog = (options) => {
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
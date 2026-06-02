import { useEffect } from 'react';

const ChatwootWidget = () => {
    useEffect(() => {
        // Evita duplicar el script si el componente se vuelve a renderizar
        if (window.chatwootSettings) return;

        window.chatwootSettings = {
            hideMessageBubble: false,
            position: 'right', // Mantiene la burbuja abajo a la derecha
            locale: 'es',      // Fuerza el idioma a español
            type: 'expanded',  // Puede ser 'standard' o 'expanded'
            darkMode: 'auto',  // Se adapta si el usuario usa modo oscuro en su navegador

            // 🔥 ESTILOS PERSONALIZADOS PARA UNIMARKET:
            theme: 'neon', // Cambia el estilo visual (opciones: 'light', 'neon')

            // Launcher (La burbuja flotante antes de abrirse)
            launcherTitle: 'Contactar al vendedor', // Texto que sale al pasar el mouse
        };

        (function (d, t) {
            var BASE_URL = "https://app.chatwoot.com";
            var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
            g.src = BASE_URL + "/packs/js/sdk.js";
            g.async = true;
            s.parentNode.insertBefore(g, s);
            g.onload = function () {
                window.chatwootSDK.run({
                    websiteToken: 'E8rcDiac5UiQ5DKqHgzEgro1', // Tu token real inyectado
                    baseUrl: BASE_URL
                })

                if (window.$chatwoot && productoActual) {
                    window.$chatwoot.setCustomAttributes({
                        producto_interes: productoActual.titulo,
                        precio_producto: productoActual.precio,
                        id_vendedor: productoActual.vendedorId // Vincula al dueño del producto
                    });
                }
            }
            })(document, "script");
    }, []);

    return null; // No renderiza HTML directo, levanta el widget flotante de Chatwoot
};

export default ChatwootWidget;
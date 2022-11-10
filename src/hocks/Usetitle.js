import React, { useEffect, useState } from 'react';

const Usetitle = title => {
    useEffect(() => {
        document.title = title;
    }, [title])

}
export default Usetitle;
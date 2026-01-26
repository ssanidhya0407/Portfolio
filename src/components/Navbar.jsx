import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Home as HomeIcon } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) setIsOpen(false);
        };

        handleResize();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const links = [
        { name: 'Home', href: '/', icon: HomeIcon },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' }
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={toggleTheme}
                style={{
                    position: 'fixed',
                    top: '30px',
                    right: '40px',
                    zIndex: 1001,
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: scrolled
                        ? isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.85)'
                        : isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: `1px solid ${scrolled ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)'}`,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: scrolled
                        ? '0 8px 32px rgba(0,0,0,0.4)'
                        : '0 4px 16px rgba(0,0,0,0.2)',
                    fontSize: '1.3rem'
                }}
            >
                {isDark ? '☀️' : '🌙'}
            </motion.button>

            {!isMobile && (
                <motion.nav
                    initial={{ y: -100, x: "-50%", opacity: 0 }}
                    animate={{ y: 0, x: "-50%", opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        position: 'fixed',
                        top: '30px',
                        left: '50%',
                        zIndex: 1000,
                        padding: '8px 12px',
                        borderRadius: '100px',
                        background: scrolled
                            ? 'rgba(0, 0, 0, 0.7)'
                            : 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        gap: '4px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                    }}
                >
                    {links.map((link) => {
                        const isActive = location.pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                to={link.href}
                                style={{
                                    textDecoration: 'none',
                                    color: isActive ? '#fff' : 'rgba(255,255,255,0.7)',
                                    padding: '10px 24px',
                                    borderRadius: '100px',
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    background: isActive ? 'rgba(255,255,255,0.15)' : 'transparent',
                                    transition: 'all 0.3s ease',
                                    border: isActive ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                {link.icon ? <link.icon size={18} /> : link.name}
                            </Link>
                        );
                    })}
                </motion.nav>
            )}

            {isMobile && (
                <motion.button
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        position: 'fixed',
                        top: '30px',
                        left: '40px',
                        zIndex: 1001,
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: scrolled ? 'rgba(0, 0, 0, 0.85)' : 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: `1px solid ${scrolled ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)'}`,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: '5px',
                        boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.2)'
                    }}
                >
                    <motion.span
                        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                        style={{ width: '20px', height: '2px', background: '#fff', borderRadius: '2px' }}
                    />
                    <motion.span
                        animate={{ opacity: isOpen ? 0 : 1 }}
                        style={{ width: '20px', height: '2px', background: '#fff', borderRadius: '2px' }}
                    />
                    <motion.span
                        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                        style={{ width: '20px', height: '2px', background: '#fff', borderRadius: '2px' }}
                    />
                </motion.button>
            )}

            <AnimatePresence>
                {isOpen && isMobile && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'fixed', inset: 0,
                                background: 'rgba(0, 0, 0, 0.6)',
                                backdropFilter: 'blur(10px)',
                                zIndex: 999
                            }}
                        />
                        <motion.nav
                            initial={{ x: -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            style={{
                                position: 'fixed', top: '100px', left: '40px',
                                zIndex: 1000, padding: '2rem',
                                borderRadius: '32px',
                                background: 'rgba(0, 0, 0, 0.9)',
                                backdropFilter: 'blur(40px)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                minWidth: '220px'
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {links.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={handleLinkClick}
                                        style={{ textDecoration: 'none', display: 'block' }}
                                    >
                                        <div style={{
                                            color: location.pathname === link.href ? '#0071e3' : '#fff',
                                            fontSize: '1.1rem', fontWeight: 500,
                                            padding: '12px 16px', borderRadius: '16px',
                                            background: location.pathname === link.href ? 'rgba(0, 113, 227, 0.1)' : 'transparent'
                                        }}>
                                            {link.name}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

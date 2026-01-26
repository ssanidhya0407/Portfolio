import React from 'react';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';

const ProjectsPage = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Projects />
        </motion.main>
    );
};

export default ProjectsPage;

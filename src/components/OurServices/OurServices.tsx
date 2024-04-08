'use client'
import React, { useState } from 'react';
import styles from './OurServices.module.scss';
import Image from 'next/image';

interface Service {
    title: string;
    description: string;
    deliverables: string[];
}

const OurServices: React.FC = () => {
    const services: Service[] = [
        {
            title: 'Разработка веб-сайтов',
            description: 'Наши услуги по разработке веб-сайтов помогут вашему бизнесу выделиться в интернете и привлечь новых клиентов.',
            deliverables: [
                'Приоритезация функций',
                'Быстрое прототипирование',
                'Анализ соответствия рынку',
                'Гибкий подход к разработке',
                'Тестирование с пользователями и обратная связь',
                'Итеративная разработка'
            ]
        },
        {
            title: 'Исследование проекта',
            description: 'Наши услуги по исследованию проекта помогают клиентам четко определить цели, объем и потенциальные сложности проекта. Эта предварительная фаза критична для согласования ожиданий и создания основы для успешной реализации проекта.',
            deliverables: [
                'Анализ требований',
                'Исследование осуществимости',
                'Интервью с заинтересованными сторонами',
                'Разработка дорожной карты проекта',
                'Оценка рисков',
                'План распределения ресурсов'
            ]
        },
        {
            title: 'Разработка MVP',
            description: 'Наши услуги по разработке MVP предназначены для стартапов и бизнеса, стремящихся быстро запустить продукт с основными функциями. Мы сосредотачиваемся на создании минимально жизнеспособного продукта, который подтверждает вашу бизнес-идею с минимальными рисками и инвестициями.',
            deliverables: [
                'Приоритезация функций',
                'Быстрое прототипирование',
                'Анализ соответствия рынку',
                'Гибкий подход к разработке',
                'Тестирование с пользователями и обратная связь',
                'Итеративная разработка'
            ]
        }
    ];

    const [selectedService, setSelectedService] = useState<Service>(services[0]); // Selecting the first service by default

    const handleClick = (index: number) => {
        setSelectedService(services[index]);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.titleOur}>Наши услуги</h2>
            <div className={styles.service_list}>
                {services.map((service, index) => (
                    <button key={index} onClick={() => handleClick(index)}>{service.title}</button>
                ))}
            </div>
            <div className={styles.ourTitle}>
                <div className={styles.containTitle}>
                    <h4>{selectedService.title}</h4>
                    <p className={styles.description}>{selectedService.description}</p>
                </div>
                <div className={styles.deliverables}>
                    <h3 className={styles.deliverables_title}>Deliverables</h3>
                    <div className={styles.deliverables_list}>
                        {selectedService.deliverables.map((item, index) => (
                            <div key={index}>
                                <Image src='/check.svg' alt="check" width={25} height={25} className={styles.check} />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;

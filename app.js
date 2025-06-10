// Конфигурация Google Apps Script (добавьте в начало файла)
const GOOGLE_APPS_SCRIPT_CONFIG = {
    webAppUrl: 'https://script.google.com/macros/s/AKfycbx0PIK1J57tuVVL_crKpprc8GFSJ9WlPM7HgOl4IZjXoBWvTCNQlw-6NrQetIT0rpfS/exec'
};

class MediaPlanningApp {
    constructor() {
        // Данные приложения
        this.data = {
            benchmarks: {
                "CPM": 260,
                "CTR": 0.001962,
                "CPC": 62,
                "CPT": 420,
                "VTR": 0.85,
                "CPA": 10000
            },
            platforms: [
                {
                    "п/п": 1,
                    "Категория": "Видео",
                    "Сайт": "AdsHeads",
                    "Формат": "In-Stream Video 1280x720",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 300,
                    "CPM": 300,
                    "CTR%": 0.0096,
                    "CPC": 31.25,
                    "VTR%": 0.77,
                    "CPV": 0.38,
                    "Частота": 5,
                    "CPT": 1500,
                    "PI": 0.41,
                    "CPVisit": 76.21,
                    "CPA": 3632.48,
                    "Процент отказов": 0.35
                },
                {
                    "п/п": 2,
                    "Категория": "Видео",
                    "Сайт": "Digital Alliance VideoNetwork",
                    "Формат": "In-stream video",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 240.00000000000003,
                    "CPM": 240.00,
                    "CTR%": 0.0073,
                    "CPC": 32.87671232876712,
                    "VTR%": 0.85,
                    "CPV": 0.28,
                    "Частота": 2.099999930116649,
                    "CPT": 503.99,
                    "PI": 0.39,
                    "CPVisit": 84.29,
                    "CPA": 5406.37,
                    "Процент отказов": 0.35
                },
                {
                    "п/п": 3,
                    "Категория": "Видео",
                    "Сайт": "MyTarget",
                    "Формат": "Pre-roll (1920x1080)",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 279.99,
                    "CPM": 279.99,
                    "CTR%": 0.0085,
                    "CPC": 32.94,
                    "VTR%": 0.96,
                    "CPV": 0.28,
                    "Частота": 3.000000000000001,
                    "CPT": 840,
                    "PI": 0.36,
                    "CPVisit": 91.43,
                    "CPA": 7347.34,
                    "Процент отказов": 0.14
                },
                {
                    "п/п": 4,
                    "Категория": "Видео",
                    "Сайт": "Solta",
                    "Формат": "In-stream video",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 247.00,
                    "CPM": 247.00,
                    "CTR%": 0.0077,
                    "CPC": 32.07,
                    "VTR%": 0.80,
                    "CPV": 0.30,
                    "Частота": 2.200000001599782,
                    "CPT": 543.40,
                    "PI": 0.37,
                    "CPVisit": 86.69,
                    "CPA": 5859.44,
                    "Процент отказов": 0.3551903114456663
                },
                {
                    "п/п": 5,
                    "Категория": "Видео",
                    "Сайт": "RuTube.ru",
                    "Формат": "Pre-roll (1920x1080)",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 370,
                    "CPM": 370,
                    "CTR%": 0.0088,
                    "CPC": 42.04,
                    "VTR%": 0.93,
                    "CPV": 0.39,
                    "Частота": 2.9999999919999994,
                    "CPT": 1109.99,
                    "PI": 0.37,
                    "CPVisit": 113.63,
                    "CPA": 7689.075,
                    "Процент отказов": 0.3551903114456663
                },
                {
                    "п/п": 6,
                    "Категория": "Видео",
                    "Сайт": "Soloway",
                    "Формат": "In-stream video",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 300,
                    "CPM": 300,
                    "CTR%": 0.0087,
                    "CPC": 34.48,
                    "VTR%": 0.75,
                    "CPV": 0.39,
                    "Частота": 3.0999999812000006,
                    "CPT": 929.99,
                    "PI": 0.34,
                    "CPVisit": 101.41,
                    "CPA": 7464.39,
                    "Процент отказов": 0.38432601070611955
                },
                {
                    "п/п": 7,
                    "Категория": "Видео",
                    "Сайт": "Yandex.ru//Видеосеть",
                    "Формат": "In-stream video",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 280,
                    "CPM": 280,
                    "CTR%": 0.0076,
                    "CPC": 36.36,
                    "VTR%": 0.89,
                    "CPV": 0.31,
                    "Частота": 3.0000000000000004,
                    "CPT": 840.00,
                    "PI": 0.35,
                    "CPVisit": 103.89,
                    "CPA": 7429.57,
                    "Процент отказов": 0.3800791556728232
                },
                {
                    "п/п": 8,
                    "Категория": "Баннерная реклама",
                    "Сайт": "AstraLab",
                    "Формат": "300x250",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 120,
                    "CPM": 120,
                    "CTR%": 0.002,
                    "CPC": 60,
                    "VTR%": null,
                    "CPV": null,
                    "Частота": 4.000000000000001,
                    "CPT": 480.00,
                    "PI": 0.4,
                    "CPVisit": 150,
                    "CPA": 9375,
                    "Процент отказов": 0.35840707964601765
                },
                {
                    "п/п": 9,
                    "Категория": "Баннерная реклама",
                    "Сайт": "Avito.ru",
                    "Формат": "300x250",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 190,
                    "CPM": 190,
                    "CTR%": 0.003,
                    "CPC": 63.33,
                    "VTR%": null,
                    "CPV": null,
                    "Частота": 6.999999999999999,
                    "CPT": 1329.99,
                    "PI": 0.39,
                    "CPVisit": 162.39,
                    "CPA": 10410.45,
                    "Процент отказов": 0.3558378832423352
                },
                {
                    "п/п": 10,
                    "Категория": "Баннерная реклама",
                    "Сайт": "Digital Alliance Banner Network Fix",
                    "Формат": "300x250",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 120,
                    "CPM": 120,
                    "CTR%": 0.0019,
                    "CPC": 63.15,
                    "VTR%": null,
                    "CPV": null,
                    "Частота": 4.999999999999999,
                    "CPT": 599.9999999999999,
                    "PI": 0.39,
                    "CPVisit": 161.94,
                    "CPA": 10380.57,
                    "Процент отказов": 0.3558378832423352
                },
                {
                    "п/п": 11,
                    "Категория": "Баннерная реклама",
                    "Сайт": "Digital Box",
                    "Формат": "300x250",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 140,
                    "CPM": 140,
                    "CTR%": 0.0019,
                    "CPC": 73.68,
                    "VTR%": null,
                    "CPV": null,
                    "Частота": 4.999999999999999,
                    "CPT": 699.99,
                    "PI": 0.38,
                    "CPVisit": 193.9058171745152,
                    "CPA": 12776.17,
                    "Процент отказов": 0.3658619784286199
                },
                {
                    "п/п": 12,
                    "Категория": "Баннерная реклама",
                    "Сайт": "GoMobile",
                    "Формат": "300x250",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 130,
                    "CPM": 130,
                    "CTR%": 0.002,
                    "CPC": 65,
                    "VTR%": null,
                    "CPV": null,
                    "Частота": 4.999999999999999,
                    "CPT": 649.99,
                    "PI": 0.37,
                    "CPVisit": 175.6756756756757,
                    "CPA": 11894.60,
                    "Процент отказов": 0.3751336459212413
                },
                {
                    "п/п": 13,
                    "Категория": "Баннерная реклама",
                    "Сайт": "Hybrid",
                    "Формат": "300x250",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 150,
                    "CPM": 150,
                    "CTR%": 0.0018,
                    "CPC": 83.33,
                    "VTR%": null,
                    "CPV": null,
                    "Частота": 3.0000000000000004,
                    "CPT": 450.00,
                    "PI": 0.37,
                    "CPVisit": 225.22,
                    "CPA": 15238.83,
                    "Процент отказов": 0.3751336459212413
                },
                {
                    "п/п": 14,
                    "Категория": "Баннерная реклама",
                    "Сайт": "Kommersant.ru",
                    "Формат": "300x250",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 250,
                    "CPM": 250,
                    "CTR%": 0.0021,
                    "CPC": 119.04,
                    "VTR%": null,
                    "CPV": null,
                    "Частота": 6.000000000000002,
                    "CPT": 1500.00,
                    "PI": 0.34,
                    "CPVisit": 350.14,
                    "CPA": 25778.68,
                    "Процент отказов": 0.38432601070611955
                },
                {
                    "п/п": 15,
                    "Категория": "Баннерная реклама",
                    "Сайт": "MyTarget",
                    "Формат": "300x250",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 190,
                    "CPM": 190,
                    "CTR%": 0.0029,
                    "CPC": 65.51,
                    "VTR%": null,
                    "CPV": null,
                    "Частота": 3.0000000000000004,
                    "CPT": 570.0000000000001,
                    "PI": 0.32,
                    "CPVisit": 204.74,
                    "CPA": 16027.29,
                    "Процент отказов": 0.39388516020577395
                },
                {
                    "п/п": 16,
                    "Категория": "Баннерная реклама",
                    "Сайт": "Ozon.ru",
                    "Формат": "300x250",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 230,
                    "CPM": 230,
                    "CTR%": 0.0025,
                    "CPC": 92,
                    "VTR%": null,
                    "CPV": null,
                    "Частота": 3.9999999999999996,
                    "CPT": 919.99,
                    "PI": 0.36,
                    "CPVisit": 255.55,
                    "CPA": 17798.40,
                    "Процент отказов": 0.3751336459212413
                },
                {
                    "п/п": 17,
                    "Категория": "Баннерная реклама",
                    "Сайт": "Playground.ru",
                    "Формат": "300x250",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 160,
                    "CPM": 160,
                    "CTR%": 0.0029,
                    "CPC": 55.17,
                    "VTR%": null,
                    "CPV": null,
                    "Частота": 4.999999999999999,
                    "CPT": 799.9999999999999,
                    "PI": 0.34,
                    "CPVisit": 162.27180527383043,
                    "CPA": 11946.16,
                    "Процент отказов": 0.38432601070611955
                },
                {
                    "п/п": 18,
                    "Категория": "Баннерная реклама",
                    "Сайт": "Rambler&Co//PMP",
                    "Формат": "300x250",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 80,
                    "CPM": 80,
                    "CTR%": 0.0017,
                    "CPC": 47.05,
                    "VTR%": null,
                    "CPV": null,
                    "Частота": 3.0000000000000004,
                    "CPT": 240.00,
                    "PI": 0.36,
                    "CPVisit": 130.7189542483660,
                    "CPA": 9104.68,
                    "Процент отказов": 0.3751336459212413
                },
                {
                    "п/п": 19,
                    "Категория": "Баннерная реклама",
                    "Сайт": "RBC.ru",
                    "Формат": "300x250",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 250,
                    "CPM": 250,
                    "CTR%": 0.0016,
                    "CPC": 156.25,
                    "VTR%": null,
                    "CPV": null,
                    "Частота": 3.0000000000000004,
                    "CPT": 750.00,
                    "PI": 0.29,
                    "CPVisit": 538.7931034482759,
                    "CPA": 46415.63,
                    "Процент отказов": 0.41254915845361756
                },
                {
                    "п/п": 20,
                    "Категория": "Баннерная реклама",
                    "Сайт": "Soloway",
                    "Формат": "300x250",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 125,
                    "CPM": 125,
                    "CTR%": 0.0018,
                    "CPC": 69.44,
                    "VTR%": null,
                    "CPV": null,
                    "Частота": 5,
                    "CPT": 625,
                    "PI": 0.33,
                    "CPVisit": 210.4377104377104,
                    "CPA": 15988.46,
                    "Процент отказов": 0.389330785314897
                },
                {
                    "п/п": 21,
                    "Категория": "Баннерная реклама",
                    "Сайт": "vc.ru",
                    "Формат": "300x250",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 100,
                    "CPM": 100,
                    "CTR%": 0.0021,
                    "CPC": 47.61,
                    "VTR%": null,
                    "CPV": null,
                    "Частота": 2.0000000000000004,
                    "CPT": 200,
                    "PI": 0.35,
                    "CPVisit": 136.05442176870748,
                    "CPA": 9718.17,
                    "Процент отказов": 0.3800791556728232
                },
                {
                    "п/п": 22,
                    "Категория": "Баннерная реклама",
                    "Сайт": "Yandex.ru//Display",
                    "Формат": "300x250",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 170,
                    "CPM": 170,
                    "CTR%": 0.0021,
                    "CPC": 80.95,
                    "VTR%": null,
                    "CPV": null,
                    "Частота": 4.999999999999999,
                    "CPT": 849.99,
                    "PI": 0.33,
                    "CPVisit": 245.31025509631572,
                    "CPA": 18638.98,
                    "Процент отказов": 0.389330785314897
                },
                {
                    "п/п": 23,
                    "Категория": "Социальные сети",
                    "Сайт": "VK.com",
                    "Формат": "Реклама сайта",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 250,
                    "CPM": 250,
                    "CTR%": 0.0041,
                    "CPC": 59.52,
                    "VTR%": null,
                    "CPV": null,
                    "Частота": 3.0000000000000004,
                    "CPT": 750,
                    "PI": 0.31,
                    "CPVisit": 192.01229508196722,
                    "CPA": 15489.39,
                    "Процент отказов": 0.4029568782370812
                },
                {
                    "п/п": 24,
                    "Категория": "Социальные сети",
                    "Сайт": "VK.com",
                    "Формат": "Истории",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 270,
                    "CPM": 270,
                    "CTR%": 0.005,
                    "CPC": 54,
                    "VTR%": 0.99,
                    "CPV": 0.27,
                    "Частота": 5,
                    "CPT": 1350,
                    "PI": 0.32,
                    "CPVisit": 168.75,
                    "CPA": 13183.59,
                    "Процент отказов": 0.39388516020577395
                },
                {
                    "п/п": 25,
                    "Категория": "Социальные сети",
                    "Сайт": "VK.com",
                    "Формат": "Карусель",
                    "Единица закупки": "CPM",
                    "Стоимость за единицу": 260,
                    "CPM": 260,
                    "CTR%": 0.0046,
                    "CPC": 56.52,
                    "VTR%": null,
                    "CPV": null,
                    "Частота": 3.9999999999999996,
                    "CPT": 1039.99,
                    "PI": 0.32,
                    "CPVisit": 176.63043478260872,
                    "CPA": 13799.25,
                    "Процент отказов": 0.39388516020577395
                },
                {
                    "п/п": 26,
                    "Категория": "Социальные сети",
                    "Сайт": "VK.com",
                    "Формат": "Реклама сайта",
                    "Единица закупки": "CPC",
                    "Стоимость за единицу": 50,
                    "CPM": 220,
                    "CTR%": 0.0044,
                    "CPC": 50,
                    "VTR%": null,
                    "CPV": null,
                    "Частота": 3.9999999999999996,
                    "CPT": 879.99,
                    "PI": 0.32,
                    "CPVisit": 156.25,
                    "CPA": 12207.03,
                    "Процент отказов": 0.39388516020577395
                }
            ],
            assignments: {
                "brandformance": {
                    "title": "Максимизация охвата и конверсии (Brandformance)",
                    "description": "Определить наиболее релевантные площадки и каналы с точки зрения соответствия цели с учетом бенчмарков",
                    "fields": ["Номер п/п", "Площадка", "Формат"],
                    "slots": 15
                },
                "max_traffic": {
                    "title": "Максимизация качественного трафика на сайт",
                    "description": "Определить наиболее релевантные площадки и каналы с точки зрения соответствия цели с учетом бенчмарков",
                    "fields": ["Номер п/п", "Площадка", "Формат"],
                    "slots": 15
                },
                "max_reach": {
                    "title": "Максимизация охвата с минимальной ценой",
                    "description": "Определить наиболее релевантные площадки и каналы для достижения максимального охвата при ограниченном бюджете",
                    "fields": ["Номер п/п", "Площадка", "Формат"],
                    "slots": 15
                }
            }
        };
        
        // Состояние приложения
        this.currentSection = 'home';
        this.currentAssignment = null;
        this.selectedPlatforms = [];
        this.platformsForComparison = [];
        this.metricsChart = null;
        this.comparisonChart = null;
        
        // Инициализация приложения
        this.init();
    }
    
    // Инициализация приложения
    async init() {
        // Ждем полной загрузки DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupApp();
            });
        } else {
            this.setupApp();
        }
    }
    
    // Настройка приложения
    setupApp() {
        // Настройка обработчиков событий
        this.setupEventListeners();
        
        // Инициализация UI компонентов
        this.initUI();
    }
    
    // Настройка обработчиков событий
    setupEventListeners() {
        // Навигация по разделам
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.addEventListener('click', (e) => {
                const section = e.target.dataset.section;
                this.switchSection(section);
            });
        });
        
        // Кнопка "Начать обучение"
        const startBtn = document.getElementById('start-learning-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                this.switchSection('learning');
            });
        }
        
        // Выбор категории в базе данных
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', () => {
                this.filterPlatformsTable();
            });
        }
        
        // Сортировка в базе данных
        const sortField = document.getElementById('sort-field');
        if (sortField) {
            sortField.addEventListener('change', () => {
                this.sortPlatformsTable();
            });
        }
        
        // Поиск в базе данных
        const searchInput = document.getElementById('platform-search');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                this.filterPlatformsTable();
            });
        }
        
        // Возврат к списку заданий
        const backBtn = document.getElementById('back-to-assignments');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                this.hideAssignmentInterface();
            });
        }
        
        // Кнопка отправки решения задания
        const submitBtn = document.getElementById('submit-assignment');
        if (submitBtn) {
            submitBtn.addEventListener('click', () => {
                this.submitAssignment();
            });
        }
        
        // Кнопки из окна с обратной связью
        const retryBtn = document.getElementById('retry-assignment');
        if (retryBtn) {
            retryBtn.addEventListener('click', () => {
                this.retryAssignment();
            });
        }
        
        const backFromFeedbackBtn = document.getElementById('back-to-assignments-from-feedback');
        if (backFromFeedbackBtn) {
            backFromFeedbackBtn.addEventListener('click', () => {
                this.hideAssignmentFeedback();
                this.hideAssignmentInterface();
            });
        }
        
        // Выбор площадки в задании
        const platformSelect = document.getElementById('platform-select');
      
        if (platformSelect) {
            platformSelect.addEventListener('change', (e) => {
                const platformId = e.target.value;
                if (platformId) {
                    this.addPlatformToAssignment(parseInt(platformId));
                    this.showPlatformPreview(); // Убираем параметр, теперь показываем все
                    e.target.value = '';
                }
            });
        }
    }
    
    // Инициализация интерфейса
    initUI() {
        // Отображаем бенчмарки в разделе обучения
        const elements = {
            'cpm-benchmark': this.data.benchmarks.CPM,
            'ctr-benchmark': (this.data.benchmarks.CTR * 100).toFixed(2),
            'cpc-benchmark': this.data.benchmarks.CPC,
            'vtr-benchmark': (this.data.benchmarks.VTR * 100).toFixed(2),
            'cpt-benchmark': this.data.benchmarks.CPT,
            'cpa-benchmark': this.data.benchmarks.CPA
        };
        
        for (const [id, value] of Object.entries(elements)) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = value;
            }
        }
        
        // Заполняем бенчмарки в разделе заданий
        const assignmentElements = {
            'cpm-benchmark-assignments': this.data.benchmarks.CPM,
            'ctr-benchmark-assignments': (this.data.benchmarks.CTR * 100).toFixed(2),
            'cpc-benchmark-assignments': this.data.benchmarks.CPC,
            'vtr-benchmark-assignments': (this.data.benchmarks.VTR * 100).toFixed(2),
            'cpt-benchmark-assignments': this.data.benchmarks.CPT,
            'cpa-benchmark-assignments': this.data.benchmarks.CPA
        };
        
        for (const [id, value] of Object.entries(assignmentElements)) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = value;
            }
        }
        
        // Инициализация графика метрик с задержкой для корректной загрузки
        setTimeout(() => {
            this.initMetricsChart();
        }, 100);
        
        // Заполняем список заданий
        this.renderAssignmentsList();
        
        // Заполняем таблицу площадок
        this.renderPlatformsTable();
    }
    
    // Переключение между разделами
    switchSection(sectionName) {
        // Обновляем активный пункт меню
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        const activeNavItem = document.querySelector(`.nav-item[data-section="${sectionName}"]`);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }
        
        // Скрываем все разделы и показываем выбранный
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        this.currentSection = sectionName;
    }
    
    // Инициализация графика метрик в разделе обучения
    initMetricsChart() {
        const canvas = document.getElementById('metricsChart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // Группируем площадки по категориям
        const categories = [...new Set(this.data.platforms.map(p => p.Категория))];
        
        // Вычисляем средние значения для каждой категории
        const categoryMetrics = categories.map(category => {
            const platforms = this.data.platforms.filter(p => p.Категория === category);
            
            return {
                category,
                avgCPM: this.average(platforms, 'CPM'),
                avgCTR: this.average(platforms, 'CTR%') * 100,
                avgCPC: this.average(platforms, 'CPC'),
                avgVTR: this.averageNonNull(platforms, 'VTR%') * 100,
                avgCPT: this.average(platforms, 'CPT'),
                avgCPA: this.average(platforms, 'CPA')
            };
        });
        
        // Создаем график
        this.metricsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: categories,
                datasets: [
                    {
                        label: 'CPM (руб.)',
                        data: categoryMetrics.map(m => m.avgCPM),
                        backgroundColor: '#1FB8CD',
                        borderWidth: 0
                    },
                    {
                        label: 'CTR (%)',
                        data: categoryMetrics.map(m => m.avgCTR),
                        backgroundColor: '#FFC185',
                        borderWidth: 0
                    },
                    {
                        label: 'CPC (руб.)',
                        data: categoryMetrics.map(m => m.avgCPC),
                        backgroundColor: '#B4413C',
                        borderWidth: 0
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Сравнение средних метрик по категориям площадок',
                        font: {
                            size: 16
                        }
                    },
                    legend: {
                        position: 'top'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += context.parsed.y.toFixed(2);
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // Среднее значение для массива объектов по указанному полю
    average(arr, field) {
        const filtered = arr.filter(item => item[field] !== null && item[field] !== undefined);
        if (filtered.length === 0) return 0;
        
        const sum = filtered.reduce((acc, curr) => acc + curr[field], 0);
        return sum / filtered.length;
    }
    
    // Среднее значение, игнорируя null значения
    averageNonNull(arr, field) {
        const values = arr.map(item => item[field]).filter(val => val !== null && val !== undefined);
        if (values.length === 0) return 0;
        
        const sum = values.reduce((acc, curr) => acc + curr, 0);
        return sum / values.length;
    }
    
    // Отрисовка списка заданий
    renderAssignmentsList() {
        const container = document.getElementById('assignment-list-container');
        if (!container) return;
        
        // Очищаем контейнер
        container.innerHTML = '';
        
        // Создаем карточки для каждого типа задания
        for (const [key, assignment] of Object.entries(this.data.assignments)) {
            const card = document.createElement('div');
            card.className = 'card assignment-card';
            card.innerHTML = `
                <div class="card__body">
                    <span class="assignment-type">${this.getAssignmentTypeText(key)}</span>
                    <h3>${assignment.title}</h3>
                    <p>${assignment.description}</p>
                    <p>Количество площадок для выбора: до ${assignment.slots}</p>
                    <button class="btn btn--primary mt-8" data-assignment="${key}">Приступить к заданию</button>
                </div>
            `;
            
            // Добавляем обработчик для кнопки
            const button = card.querySelector('button');
            button.addEventListener('click', () => {
                this.showAssignmentInterface(key);
            });
            
            container.appendChild(card);
        }
    }
    
    // Получение текста типа задания
    getAssignmentTypeText(type) {
        switch(type) {
            case 'brandformance':
                return 'Brandformance';
            case 'max_traffic':
                return 'Качественный трафик';
            case 'max_reach':
                return 'Максимальный охват';
            default:
                return 'Задание';
        }
    }
    
    // Показать интерфейс выполнения задания
    showAssignmentInterface(assignmentKey) {
        // Сохраняем текущее задание
        this.currentAssignment = assignmentKey;
        
        // Очищаем выбранные площадки
        this.selectedPlatforms = [];
        
        // Скрываем список заданий и показываем интерфейс выполнения
        const listContainer = document.getElementById('assignment-list-container');
        const interfaceContainer = document.getElementById('assignment-interface');
        const feedbackContainer = document.getElementById('assignment-feedback');
        
        if (listContainer) listContainer.style.display = 'none';
        if (interfaceContainer) interfaceContainer.classList.remove('hidden');
        if (feedbackContainer) feedbackContainer.classList.add('hidden');
        
        // Заполняем данными текущее задание
        const assignment = this.data.assignments[assignmentKey];
        const titleElement = document.getElementById('current-assignment-title');
        const descElement = document.getElementById('assignment-description');
        const slotsElement = document.getElementById('assignment-slots');
        
        if (titleElement) titleElement.textContent = assignment.title;
        if (descElement) descElement.textContent = assignment.description;
        if (slotsElement) slotsElement.textContent = `Выберите до ${assignment.slots} площадок для этого задания.`;
        
        // Рендерим слоты для выбора площадок
        this.renderPlatformSlots();
        
        // Заполняем селект с площадками
        this.fillPlatformSelect();
        this.showPlatformPreview();
    }
    
    // Скрыть интерфейс выполнения задания
    hideAssignmentInterface() {
        const listContainer = document.getElementById('assignment-list-container');
        const interfaceContainer = document.getElementById('assignment-interface');
        const justification = document.getElementById('justification');
        
        if (listContainer) listContainer.style.display = 'grid';
        if (interfaceContainer) interfaceContainer.classList.add('hidden');
        if (justification) justification.value = '';
        
        this.currentAssignment = null;
        this.selectedPlatforms = [];
        this.showPlatformPreview();
    }
    
    // Скрыть интерфейс обратной связи
    hideAssignmentFeedback() {
        const feedbackContainer = document.getElementById('assignment-feedback');
        if (feedbackContainer) {
            feedbackContainer.classList.add('hidden');
        }
    }
    
    // Повторить задание
    retryAssignment() {
        this.selectedPlatforms = [];
        const justification = document.getElementById('justification');
        const feedbackContainer = document.getElementById('assignment-feedback');
        
        if (justification) justification.value = '';
        if (feedbackContainer) feedbackContainer.classList.add('hidden');
        
        this.renderPlatformSlots();
        this.fillPlatformSelect();
        this.showPlatformPreview();
    }
    
    // Отрисовка слотов для выбора площадок
    renderPlatformSlots() {
        const container = document.getElementById('selected-platforms');
        if (!container || !this.currentAssignment) return;
        
        container.innerHTML = '';
        
        const assignment = this.data.assignments[this.currentAssignment];
        const totalSlots = assignment.slots;
        
        // Создаем слоты
        for (let i = 0; i < totalSlots; i++) {
            const slot = document.createElement('div');
            slot.className = 'platform-slot';
            
            // Если есть выбранная площадка для этого слота
            if (this.selectedPlatforms[i]) {
                const platform = this.data.platforms.find(p => p['п/п'] === this.selectedPlatforms[i]);
                if (platform) {
                    slot.classList.add('filled');
                    
                    slot.innerHTML = `
                        <div>
                            <strong>${platform.Сайт}</strong>
                            <p>${platform.Формат}</p>
                        </div>
                        <button class="remove-platform" data-index="${i}">×</button>
                    `;
                    
                    // Добавляем обработчик для кнопки удаления
                    const removeBtn = slot.querySelector('.remove-platform');
                    if (removeBtn) {
                        removeBtn.addEventListener('click', (e) => {
                            const index = parseInt(e.target.dataset.index);
                            this.removePlatformFromAssignment(index);
                        });
                    }
                }
            } else {
                slot.innerHTML = `<div class="platform-slot-empty">Слот ${i + 1}: Выберите площадку</div>`;
            }
            
            container.appendChild(slot);
        }
    }
    
    // Заполнение селекта с площадками
    fillPlatformSelect() {
        const select = document.getElementById('platform-select');
        if (!select) return;
        
        select.innerHTML = '<option value="">Выберите площадку</option>';
        
        // Получаем уже выбранные площадки
        const selectedIds = this.selectedPlatforms;
        
        // Добавляем опции для каждой доступной площадки
        this.data.platforms.forEach(platform => {
            // Если площадка еще не выбрана
            if (!selectedIds.includes(platform['п/п'])) {
                const option = document.createElement('option');
                option.value = platform['п/п'];
                option.textContent = `${platform.Сайт} - ${platform.Формат} (${platform.Категория}): CPM - (${platform.CPM}), CPT - (${platform.CPT}), CTR - (${platform.CTR%}), VTR - (${platform.VTR%}), CPC - (${platform.CPC}, CPA - (${platform.CPA}) `;
                select.appendChild(option);
            }
        });
    }

    // Отображение предпросмотра данных всех выбранных площадок
    showPlatformPreview() {
        console.log('showPlatformPreview вызвана');
        console.log('selectedPlatforms:', this.selectedPlatforms);
        
        const previewContainer = document.getElementById('platform-preview');
        console.log('previewContainer найден:', previewContainer);
        
        if (!previewContainer) {
            console.error('Элемент platform-preview не найден!');
            return;
        }
        
        // Если нет выбранных площадок, скрываем блок
        if (this.selectedPlatforms.length === 0) {
            console.log('Нет выбранных площадок, скрываем блок');
            previewContainer.style.display = 'none';
            return;
        }
        
        console.log('Отображаем предпросмотр для', this.selectedPlatforms.length, 'площадок');
        
        let html = `
            <div class="card">
                <div class="card__header">
                    <h4>Площадки: ${this.selectedPlatforms.length}</h4>
                </div>
                <div class="card__body">
        `;
        
        // Добавляем данные по каждой выбранной площадке
        this.selectedPlatforms.forEach((platformId, index) => {
            const platform = this.data.platforms.find(p => p['п/п'] === platformId);
            console.log('Обрабатываем площадку:', platform);
            
            if (!platform) return;
            
            const ctrFormatted = platform['CTR%'] ? (platform['CTR%'] * 100).toFixed(1) + '%' : '-';
            const vtrFormatted = platform['VTR%'] ? (platform['VTR%'] * 100).toFixed(0) + '%' : '-';
           
            
            // Сокращаем название если слишком длинное
            const siteName = platform.Сайт;
            
            html += `
                <div class="platform-preview-item">
                    <h5 title="${platform.Сайт}">${siteName}-${platform.Формат}</h5>
                    <div class="platform-metrics-grid">
                        <div class="platform-metric">
                            <span class="label">CPM</span>
                            <span class="value">${platform.CPM ? Math.round(platform.CPM) : '-'}</span>
                        </div>
                        <div class="platform-metric">
                            <span class="label">CTR</span>
                            <span class="value">${ctrFormatted}</span>
                        </div>
                        <div class="platform-metric">
                            <span class="label">CPC</span>
                            <span class="value">${platform.CPC ? Math.round(platform.CPC) : '-'}</span>
                        </div>
                        <div class="platform-metric">
                            <span class="label">VTR</span>
                            <span class="value">${vtrFormatted}</span>
                        </div>
                        <div class="platform-metric">
                            <span class="label">CPA</span>
                            <span class="value">${platform.CPA ? Math.round(platform.CPA) : '-'}</span>
                        </div>
                        <div class="platform-metric">
                            <span class="label">CPT</span>
                            <span class="value">${platform.CPT ? Math.round(platform.CPT) : '-'}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
        
        console.log('Устанавливаем HTML:', html);
        previewContainer.innerHTML = html;
        previewContainer.style.display = 'block';
        console.log('Предпросмотр должен быть видим');
    }

    // Добавление площадки в задание
    addPlatformToAssignment(platformId) {
        if (!this.currentAssignment) return;
        
        const assignment = this.data.assignments[this.currentAssignment];
        
        // Если есть свободные слоты
        if (this.selectedPlatforms.length < assignment.slots) {
            this.selectedPlatforms.push(platformId);
            this.renderPlatformSlots();
            this.fillPlatformSelect();
            this.showPlatformPreview(); 
        } else {
            alert(`Вы не можете выбрать больше ${assignment.slots} площадок.`);
        }
    }
    
    // Удаление площадки из задания
    removePlatformFromAssignment(index) {
        this.selectedPlatforms.splice(index, 1);
        this.renderPlatformSlots();
        this.fillPlatformSelect();
        this.showPlatformPreview();
    }
    
    // Отправка решения задания
    submitAssignment() {
        const justificationElement = document.getElementById('justification');
        const justification = justificationElement ? justificationElement.value : '';
        
        if (!justification.trim()) {
            alert('Пожалуйста, добавьте обоснование вашего выбора.');
            return;
        }

        // Отправляем данные через Google Apps Script
        this.sendToGoogleAppsScript(justification);
        
        // Генерируем локальную оценку
        this.generateFeedback();
    }

  // Обновленная функция для отправки через Google Apps Script
async sendToGoogleAppsScript(justification) {
    try {
        // Получаем имя из поля формы вместо prompt
        const studentNameElement = document.getElementById('student-name');
        const studentName = studentNameElement ? studentNameElement.value.trim() : '';
        
        // Проверяем что имя заполнено
        if (!studentName) {
            alert('Пожалуйста, введите ваше имя.');
            studentNameElement?.focus();
            return;
        }
        
        const selectedPlatformsNames = this.selectedPlatforms.map(id => {
            const platform = this.data.platforms.find(p => p['п/п'] === id);
            return platform ? platform.Сайт : `Площадка ${id}`;
        });
        
        const assignmentTitle = this.data.assignments[this.currentAssignment]?.title || 'Неизвестное задание';
        
        const submissionData = {
            studentName: studentName,
            assignmentTitle: assignmentTitle,
            selectedPlatforms: selectedPlatformsNames.join(', '),
            justification: justification,
            timestamp: new Date().toLocaleString('ru-RU'),
            platformCount: this.selectedPlatforms.length
        };

        this.showNotification('⏳ Отправка данных тренеру...');

        const response = await fetch(GOOGLE_APPS_SCRIPT_CONFIG.webAppUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: JSON.stringify(submissionData),
            mode: 'cors',
            cache: 'no-cache'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        if (result.success) {
            console.log('Данные успешно отправлены:', result);
            this.showNotification('✅ Ваше решение отправлено тренеру!');
            console.log('Отправленные данные:', submissionData);
        } else {
            throw new Error(result.error || result.message || 'Неизвестная ошибка сервера');
        }
        
    } catch (error) {
        console.error('Ошибка отправки данных:', error);
        
        let errorMessage = '❌ Ошибка отправки';
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
            errorMessage += ': Проблема с сетью или CORS';
        } else if (error.message.includes('HTTP error')) {
            errorMessage += ': Ошибка сервера';
        } else {
            errorMessage += ': ' + error.message;
        }
        
        this.showNotification(errorMessage);
        
        setTimeout(() => {
            if (confirm('Не удалось отправить данные автоматически. Хотите скопировать данные для ручной отправки?')) {
                this.copyDataToClipboard(justification);
            }
        }, 2000);
    }
}


    // Функция для копирования данных в буфер обмена (резервный вариант)
    copyDataToClipboard(justification) {
        const studentName = prompt('Введите ваше имя:') || 'Анонимный студент';
        
        const selectedPlatformsNames = this.selectedPlatforms.map(id => {
            const platform = this.data.platforms.find(p => p['п/п'] === id);
            return platform ? platform.Сайт : `Площадка ${id}`;
        });
        
        const assignmentTitle = this.data.assignments[this.currentAssignment]?.title || 'Неизвестное задание';
        
        const textData = `
    Студент: ${studentName}
    Задание: ${assignmentTitle}
    Выбранные площадки: ${selectedPlatformsNames.join(', ')}
    Обоснование: ${justification}
    Дата: ${new Date().toLocaleString('ru-RU')}
        `.trim();
        
        navigator.clipboard.writeText(textData).then(() => {
            this.showNotification('📋 Данные скопированы в буфер обмена');
        }).catch(() => {
            alert('Данные для отправки тренеру:\n\n' + textData);
        });
    }

    // Функция для показа уведомлений
    showNotification(message) {
        // Удаляем предыдущее уведомление если есть
        const existingNotification = document.querySelector('.custom-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Создаем новое уведомление
        const notification = document.createElement('div');
        notification.className = 'custom-notification';
        
        // Определяем тип уведомления для стилизации
        let backgroundColor = 'var(--color-primary)';
        if (message.includes('❌')) {
            backgroundColor = 'var(--color-error)';
        } else if (message.includes('⏳')) {
            backgroundColor = 'var(--color-warning)';
        }
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${backgroundColor};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--radius-base);
            z-index: 10000;
            box-shadow: var(--shadow-lg);
            font-weight: var(--font-weight-medium);
            max-width: 350px;
            word-wrap: break-word;
            animation: slideIn 0.3s ease-out;
            font-size: var(--font-size-sm);
            line-height: 1.4;
        `;
        notification.textContent = message;
        
        // Добавляем анимацию если её еще нет
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes slideOut {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        // Автоматически убираем через время (больше для ошибок)
        const duration = message.includes('❌') ? 6000 : 4000;
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOut 0.3s ease-out';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }
        }, duration);
    }

    // Функция для тестирования подключения к Google Apps Script
    async testGoogleAppsScript() {
        try {
            const response = await fetch(GOOGLE_APPS_SCRIPT_CONFIG.webAppUrl, {
                method: 'GET'
            });
            
            if (response.ok) {
                const text = await response.text();
                console.log('✅ Google Apps Script работает:', text);
                this.showNotification('✅ Подключение к серверу работает');
                return true;
            } else {
                throw new Error(`HTTP ${response.status}`);
            }
        } catch (error) {
            console.error('❌ Ошибка подключения:', error);
            this.showNotification('❌ Ошибка подключения к серверу');
            return false;
        }
    }
    
    // Отрисовка таблицы площадок
    renderPlatformsTable() {
        const tbody = document.getElementById('platforms-table-body');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        // Добавляем строки для каждой площадки
        this.data.platforms.forEach(platform => {
            const row = document.createElement('tr');
            
            // Форматирование процентных значений
            const ctrFormatted = platform['CTR%'] ? (platform['CTR%'] * 100).toFixed(4) + '%' : '-';
            const vtrFormatted = platform['VTR%'] ? (platform['VTR%'] * 100).toFixed(2) + '%' : '-';
            
            row.innerHTML = `
                <td>${platform['п/п']}</td>
                <td>${platform.Сайт}</td>
                <td>${platform.Формат}</td>
                <td>${platform.Категория}</td>
                <td>${platform.CPM ? platform.CPM.toFixed(2) : '-'}</td>
                <td>${ctrFormatted}</td>
                <td>${platform.CPC ? platform.CPC.toFixed(2) : '-'}</td>
                <td>${vtrFormatted}</td>
                <td>${platform.CPT ? platform.CPT.toFixed(2) : '-'}</td>
                <td>${platform.CPA ? platform.CPA.toFixed(2) : '-'}</td>
                <td>
                    <input type="checkbox" class="compare-checkbox" data-id="${platform['п/п']}" 
                        ${this.platformsForComparison.includes(platform['п/п']) ? 'checked' : ''}>
                </td>
            `;
            
            tbody.appendChild(row);
        });
        
        // Добавляем обработчики для чекбоксов сравнения
        document.querySelectorAll('.compare-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const platformId = parseInt(e.target.dataset.id);
                if (e.target.checked) {
                    // Проверяем, не выбрано ли уже слишком много площадок
                    if (this.platformsForComparison.length >= 5) {
                        alert('Для сравнения можно выбрать не более 5 площадок.');
                        e.target.checked = false;
                        return;
                    }
                    this.platformsForComparison.push(platformId);
                } else {
                    this.platformsForComparison = this.platformsForComparison.filter(id => id !== platformId);
                }
                
                this.initComparisonChart();
            });
        });
    }
    
    // Инициализация графика сравнения площадок
    initComparisonChart() {
        // Удаляем предыдущий график, если он был
        if (this.comparisonChart) {
            this.comparisonChart.destroy();
        }
        
        const chartContainer = document.getElementById('comparison-chart-container');
        if (!chartContainer) return;
        
        if (this.platformsForComparison.length === 0) {
            chartContainer.classList.add('hidden');
            return;
        }
        
        chartContainer.classList.remove('hidden');
        
        // Получаем выбранные площадки
        const selectedPlatforms = this.platformsForComparison.map(id => 
            this.data.platforms.find(p => p['п/п'] === id)
        ).filter(p => p !== undefined);
        
        // Создаем метки для графика (названия площадок)
        const canvas = document.getElementById('comparisonChart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        this.comparisonChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['CPM', 'CTR', 'CPC', 'CPT', 'CPA', 'PI'],
                datasets: selectedPlatforms.map((platform, index) => {
                    return {
                        label: `${platform.Сайт} (${platform.Формат})`,
                        data: [
                            this.normalizeValue(platform.CPM, 'CPM', this.data.platforms),
                            this.normalizeValue(platform['CTR%'], 'CTR%', this.data.platforms),
                            this.normalizeInvertedValue(platform.CPC, 'CPC', this.data.platforms),
                            this.normalizeInvertedValue(platform.CPT, 'CPT', this.data.platforms),
                            this.normalizeInvertedValue(platform.CPA, 'CPA', this.data.platforms),
                            this.normalizeValue(platform.PI, 'PI', this.data.platforms)
                        ],
                        fill: true,
                        backgroundColor: `rgba(${this.getColorRGB(index)}, 0.2)`,
                        borderColor: `rgba(${this.getColorRGB(index)}, 1)`,
                        pointBackgroundColor: `rgba(${this.getColorRGB(index)}, 1)`,
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: `rgba(${this.getColorRGB(index)}, 1)`
                    };
                })
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Сравнение показателей площадок (нормализованные значения)',
                        font: {
                            size: 16
                        }
                    },
                    tooltip: {
                        callbacks: {
                            title: function(tooltipItems) {
                                return tooltipItems[0].label;
                            },
                            label: function(context) {
                                let metricName = context.chart.data.labels[context.dataIndex];
                                let value = context.raw;
                                return `${context.dataset.label}: ${value.toFixed(2)} (нормализ.)`;
                            }
                        }
                    }
                },
                scales: {
                    r: {
                        min: 0,
                        max: 1,
                        ticks: {
                            display: false
                        }
                    }
                }
            }
        });
        
        // Обновляем список выбранных площадок
        this.updateSelectedPlatformsList();
    }
    
    // Нормализация значения (от 0 до 1, где 1 - лучшее значение)
    normalizeValue(value, field, data) {
        // Для этих метрик: выше - лучше
        const min = Math.min(...data.map(item => item[field] || 0));
        const max = Math.max(...data.map(item => item[field] || 0));
        
        if (max === min) return 0.5;
        return (value - min) / (max - min);
    }
    
    // Нормализация инвертированного значения (от 0 до 1, где 0 - лучшее значение)
    normalizeInvertedValue(value, field, data) {
        // Для этих метрик: ниже - лучше
        const min = Math.min(...data.map(item => item[field] || 0));
        const max = Math.max(...data.map(item => item[field] || 0));
        
        if (max === min) return 0.5;
        return 1 - ((value - min) / (max - min));
    }
    
    // Получение RGB цвета по индексу
    getColorRGB(index) {
        const colors = [
            '31, 184, 198', // голубой
            '255, 193, 133', // оранжевый
            '180, 65, 60', // красный
            '93, 135, 143', // сине-серый
            '210, 186, 76', // желтый
            '150, 67, 37', // коричневый
            '148, 68, 84' // бордовый
        ];
        
        return colors[index % colors.length];
    }
    
    // Обновление списка выбранных для сравнения площадок
    updateSelectedPlatformsList() {
        const container = document.getElementById('selected-platforms-list');
        if (!container) return;
        
        container.innerHTML = '';
        
        this.platformsForComparison.forEach(platformId => {
            const platform = this.data.platforms.find(p => p['п/п'] === platformId);
            if (!platform) return;
            
            const tag = document.createElement('div');
            tag.className = 'selected-platform-tag';
            tag.innerHTML = `
                <span>${platform.Сайт}</span>
                <button class="remove-selected" data-id="${platformId}">×</button>
            `;
            
            const removeBtn = tag.querySelector('.remove-selected');
            if (removeBtn) {
                removeBtn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.dataset.id);
                    this.platformsForComparison = this.platformsForComparison.filter(pid => pid !== id);
                    
                    // Обновляем чекбоксы в таблице
                    const checkbox = document.querySelector(`.compare-checkbox[data-id="${id}"]`);
                    if (checkbox) {
                        checkbox.checked = false;
                    }
                    
                    this.initComparisonChart();
                });
            }
            
            container.appendChild(tag);
        });
    }
    
    // Фильтрация таблицы площадок
    filterPlatformsTable() {
        const categoryFilter = document.getElementById('category-filter');
        const searchInput = document.getElementById('platform-search');
        
        if (!categoryFilter || !searchInput) return;
        
        const categoryValue = categoryFilter.value;
        const searchText = searchInput.value.toLowerCase();
        
        // Применяем фильтры
        let filteredPlatforms = this.data.platforms;
        
        // Фильтр по категории
        if (categoryValue !== 'all') {
            filteredPlatforms = filteredPlatforms.filter(p => p.Категория === categoryValue);
        }
        
        // Фильтр по поиску
        if (searchText) {
            filteredPlatforms = filteredPlatforms.filter(p => 
                p.Сайт.toLowerCase().includes(searchText) || 
                p.Формат.toLowerCase().includes(searchText)
            );
        }
        
        this.renderFilteredPlatforms(filteredPlatforms);
    }
    
    // Отрисовка отфильтрованных площадок
    renderFilteredPlatforms(platforms) {
        const tbody = document.getElementById('platforms-table-body');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        platforms.forEach(platform => {
            const row = document.createElement('tr');
            
            // Форматирование процентных значений
            const ctrFormatted = platform['CTR%'] ? (platform['CTR%'] * 100).toFixed(2) + '%' : '-';
            const vtrFormatted = platform['VTR%'] ? (platform['VTR%'] * 100).toFixed(2) + '%' : '-';
            
            row.innerHTML = `
                <td>${platform['п/п']}</td>
                <td>${platform.Сайт}</td>
                <td>${platform.Формат}</td>
                <td>${platform.Категория}</td>
                <td>${platform.CPM ? platform.CPM.toFixed(0) : '-'}</td>
                <td>${ctrFormatted}</td>
                <td>${platform.CPC ? platform.CPC.toFixed(2) : '-'}</td>
                <td>${vtrFormatted}</td>
                <td>${platform.CPT ? platform.CPT.toFixed(0) : '-'}</td>
                <td>${platform.CPA ? platform.CPA.toFixed(2) : '-'}</td>
                <td>
                    <input type="checkbox" class="compare-checkbox" data-id="${platform['п/п']}" 
                        ${this.platformsForComparison.includes(platform['п/п']) ? 'checked' : ''}>
                </td>
            `;
            
            tbody.appendChild(row);
        });
        
        // Добавляем обработчики для чекбоксов сравнения
        document.querySelectorAll('.compare-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const platformId = parseInt(e.target.dataset.id);
                if (e.target.checked) {
                    // Проверяем, не выбрано ли уже слишком много площадок
                    if (this.platformsForComparison.length >= 5) {
                        alert('Для сравнения можно выбрать не более 5 площадок.');
                        e.target.checked = false;
                        return;
                    }
                    this.platformsForComparison.push(platformId);
                } else {
                    this.platformsForComparison = this.platformsForComparison.filter(id => id !== platformId);
                }
                
                this.initComparisonChart();
            });
        });
    }
    
    // Сортировка таблицы площадок
    sortPlatformsTable() {
        const sortField = document.getElementById('sort-field');
        if (!sortField) return;
        
        const sortFieldValue = sortField.value;
        
        // Копируем массив площадок и сортируем его
        let sortedPlatforms = [...this.data.platforms];
        
        sortedPlatforms.sort((a, b) => {
            // Учитываем, что некоторые поля могут быть null
            const aValue = a[sortFieldValue] !== null ? a[sortFieldValue] : 0;
            const bValue = b[sortFieldValue] !== null ? b[sortFieldValue] : 0;
            
            // Для метрик "чем меньше, тем лучше" - сортируем по возрастанию
            if (sortFieldValue === 'CPC' || sortFieldValue === 'CPM' || sortFieldValue === 'CPT' || sortFieldValue === 'CPA') {
                return aValue - bValue;
            }
            
            // Для остальных метрик - по убыванию
            return bValue - aValue;
        });
        
        this.renderFilteredPlatforms(sortedPlatforms);
    }

    // Генерация обратной связи по заданию
    generateFeedback() {
        // Существующий код функции generateFeedback остается без изменений
        // (добавьте остальную часть функции если её нет)
        console.log('Генерация обратной связи...');
    }
}

// Инициализация приложения при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    window.mediaPlanningApp = new MediaPlanningApp();
});

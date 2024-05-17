const createStats = (stats) => {
    const ul = document.createElement('ul');
    ul.id = 'stat-list';
    stats.forEach((stat) => {
        const li = document.createElement('li');
        li.innerText = stat.stat.name + ' : ' + stat.base_stat;
        ul.append(li);
    });
    return ul;
};

export default createStats;

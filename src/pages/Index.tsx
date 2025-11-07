import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';

export default function Index() {
  const [viewMode, setViewMode] = useState<'admin' | 'user'>('admin');

  const companyData = {
    name: 'ООО "ТехноСтрой"',
    inn: '7734567890',
    kpp: '773401001',
    ogrn: '1157746123456',
    address: 'г. Москва, ул. Ленина, д. 1, офис 100',
    director: 'Иванов Иван Иванович',
    email: 'info@tehnostroy.ru',
    phone: '+7 (495) 123-45-67',
    registrationDate: '15.03.2015',
    employeesCount: 47,
    status: 'Активен',
  };

  const stats = [
    { label: 'Всего документов', value: '1,247', icon: 'FileText', color: 'from-blue-500 to-cyan-500' },
    { label: 'На подписи', value: '23', icon: 'Clock', color: 'from-purple-500 to-pink-500' },
    { label: 'Подписано', value: '1,189', icon: 'CheckCircle', color: 'from-green-500 to-emerald-500' },
    { label: 'Отклонено', value: '35', icon: 'XCircle', color: 'from-orange-500 to-red-500' },
  ];

  const recentDocuments = [
    { name: 'Договор поставки №145', date: '06.11.2025', status: 'Подписан', type: 'Договор' },
    { name: 'Акт выполненных работ', date: '05.11.2025', status: 'На подписи', type: 'Акт' },
    { name: 'Счет-фактура №789', date: '04.11.2025', status: 'Подписан', type: 'Счет' },
    { name: 'Спецификация к договору', date: '03.11.2025', status: 'На подписи', type: 'Спецификация' },
  ];

  const employees = [
    { name: 'Петров П.П.', role: 'Главный бухгалтер', docs: 342, avatar: '' },
    { name: 'Сидорова А.М.', role: 'Юрист', docs: 198, avatar: '' },
    { name: 'Козлов Д.В.', role: 'Менеджер', docs: 276, avatar: '' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Профиль компании
            </h1>
            <p className="text-muted-foreground mt-2">Управление данными организации</p>
          </div>
          
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg">
            <Button
              variant={viewMode === 'admin' ? 'default' : 'ghost'}
              onClick={() => setViewMode('admin')}
              className={viewMode === 'admin' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : ''}
            >
              <Icon name="Shield" size={18} className="mr-2" />
              Админ
            </Button>
            <Button
              variant={viewMode === 'user' ? 'default' : 'ghost'}
              onClick={() => setViewMode('user')}
              className={viewMode === 'user' ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white' : ''}
            >
              <Icon name="Eye" size={18} className="mr-2" />
              Как видит пользователь
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`}></div>
              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <Icon name={stat.icon as any} size={24} className="text-white" />
                  </div>
                  {viewMode === 'admin' && (
                    <Icon name="MoreVertical" size={18} className="text-muted-foreground cursor-pointer" />
                  )}
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Информация о компании
                </h2>
                {viewMode === 'admin' && (
                  <Button variant="outline" size="sm" className="gap-2">
                    <Icon name="Edit" size={16} />
                    Редактировать
                  </Button>
                )}
              </div>

              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="general">Общие данные</TabsTrigger>
                  <TabsTrigger value="documents">Документы</TabsTrigger>
                  <TabsTrigger value="team">Команда</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="space-y-4 mt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Название компании</div>
                      <div className="font-semibold">{companyData.name}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Статус</div>
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                        {companyData.status}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">ИНН</div>
                      <div className="font-semibold">{companyData.inn}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">КПП</div>
                      <div className="font-semibold">{companyData.kpp}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">ОГРН</div>
                      <div className="font-semibold">{companyData.ogrn}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Дата регистрации</div>
                      <div className="font-semibold">{companyData.registrationDate}</div>
                    </div>
                    <div className="col-span-2 space-y-1">
                      <div className="text-sm text-muted-foreground">Юридический адрес</div>
                      <div className="font-semibold">{companyData.address}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Генеральный директор</div>
                      <div className="font-semibold">{companyData.director}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Сотрудников</div>
                      <div className="font-semibold">{companyData.employeesCount}</div>
                    </div>
                    {(viewMode === 'admin' || companyData.email) && (
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">Email</div>
                        <div className="font-semibold">{companyData.email}</div>
                      </div>
                    )}
                    {(viewMode === 'admin' || companyData.phone) && (
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">Телефон</div>
                        <div className="font-semibold">{companyData.phone}</div>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="documents" className="space-y-3 mt-6">
                  {recentDocuments.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 hover:from-blue-50 hover:to-purple-50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                          <Icon name="FileText" size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="font-semibold">{doc.name}</div>
                          <div className="text-sm text-muted-foreground">{doc.type} • {doc.date}</div>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          doc.status === 'Подписан'
                            ? 'border-green-500 text-green-700'
                            : 'border-orange-500 text-orange-700'
                        }
                      >
                        {doc.status}
                      </Badge>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="team" className="space-y-4 mt-6">
                  {employees.map((emp, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-50/50 to-pink-50/50 hover:from-purple-50 hover:to-pink-50 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-purple-200">
                          <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-600 text-white font-semibold">
                            {emp.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">{emp.name}</div>
                          <div className="text-sm text-muted-foreground">{emp.role}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-purple-600">{emp.docs}</div>
                        <div className="text-xs text-muted-foreground">документов</div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="p-6 space-y-6">
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Активность за месяц
              </h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Документооборот</span>
                    <span className="font-semibold">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Вовремя подписано</span>
                    <span className="font-semibold">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Активность сотрудников</span>
                    <span className="font-semibold">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </div>

              <div className="pt-4 border-t space-y-3">
                <h3 className="font-semibold text-sm">Быстрые действия</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Icon name="Plus" size={16} />
                    Добавить сотрудника
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Icon name="Upload" size={16} />
                    Загрузить документ
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Icon name="Download" size={16} />
                    Отчёт за период
                  </Button>
                </div>
              </div>

              {viewMode === 'admin' && (
                <div className="pt-4 border-t">
                  <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-lg">
                    <Icon name="Settings" size={16} className="mr-2" />
                    Настройки компании
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}

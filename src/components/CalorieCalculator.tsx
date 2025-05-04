
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export const CalorieCalculator = () => {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [activityLevel, setActivityLevel] = useState<string>("moderate");
  const [result, setResult] = useState<number | null>(null);

  const calculateCalories = () => {
    if (!age || !weight || !height) return;
    
    // Формула Харриса-Бенедикта
    let bmr = 0;
    if (gender === "male") {
      bmr = 88.36 + (13.4 * parseFloat(weight)) + (4.8 * parseFloat(height)) - (5.7 * parseFloat(age));
    } else {
      bmr = 447.6 + (9.2 * parseFloat(weight)) + (3.1 * parseFloat(height)) - (4.3 * parseFloat(age));
    }
    
    // Коэффициенты активности
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };
    
    // Расчет суточной потребности в калориях
    const calories = bmr * activityMultipliers[activityLevel as keyof typeof activityMultipliers];
    setResult(Math.round(calories));
  };

  return (
    <Card className="shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center mb-6">
          <Icon name="Calculator" className="text-primary mr-2" size={24} />
          <h3 className="text-xl font-semibold">Калькулятор калорий</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label>Пол</Label>
            <RadioGroup 
              defaultValue={gender} 
              onValueChange={(value) => setGender(value as "male" | "female")}
              className="flex gap-4 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Мужской</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Женский</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="age">Возраст (лет)</Label>
              <Input 
                id="age" 
                type="number" 
                placeholder="25" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
              />
            </div>
            <div>
              <Label htmlFor="weight">Вес (кг)</Label>
              <Input 
                id="weight" 
                type="number" 
                placeholder="70" 
                value={weight} 
                onChange={(e) => setWeight(e.target.value)} 
              />
            </div>
            <div>
              <Label htmlFor="height">Рост (см)</Label>
              <Input 
                id="height" 
                type="number" 
                placeholder="175" 
                value={height} 
                onChange={(e) => setHeight(e.target.value)} 
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="activity">Уровень активности</Label>
            <select 
              id="activity"
              className="w-full p-2 border rounded-md mt-1"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
            >
              <option value="sedentary">Сидячий (минимум движения)</option>
              <option value="light">Легкая активность (1-3 раза в неделю)</option>
              <option value="moderate">Умеренная активность (3-5 раз в неделю)</option>
              <option value="active">Высокая активность (6-7 раз в неделю)</option>
              <option value="veryActive">Очень высокая активность (спортсмены)</option>
            </select>
          </div>
          
          <Button className="w-full" onClick={calculateCalories}>Рассчитать</Button>
          
          {result && (
            <>
              <Separator />
              <div className="text-center p-4 bg-green-50 rounded-md">
                <p className="text-sm text-gray-600 mb-1">Ваша суточная потребность в калориях:</p>
                <p className="text-3xl font-bold text-primary">{result} ккал</p>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

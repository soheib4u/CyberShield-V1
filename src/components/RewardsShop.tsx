import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Coins, Lock, Check } from "lucide-react";
import { shopItems } from "@/data/shop";
import { useToast } from "@/hooks/use-toast";

interface RewardsShopProps {
  certCoins: number;
  ownedItems: string[];
  onPurchase: (itemId: string, cost: number) => void;
}

const RewardsShop = ({ certCoins, ownedItems, onPurchase }: RewardsShopProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handlePurchase = (itemId: string, cost: number, name: string) => {
    if (certCoins >= cost && !ownedItems.includes(itemId)) {
      onPurchase(itemId, cost);
      toast({
        title: "Purchase Successful!",
        description: `You bought ${name}`,
      });
    } else if (certCoins < cost) {
      toast({
        title: "Not Enough CertCoins",
        description: `You need ${cost - certCoins} more CertCoins`,
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <ShoppingBag className="w-4 h-4" />
          Shop
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
              Rewards Shop
            </span>
            <div className="flex items-center gap-2 text-primary">
              <Coins className="w-5 h-5" />
              <span className="text-xl font-bold">{certCoins}</span>
            </div>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="grid grid-cols-2 gap-4">
            {shopItems.map((item) => {
              const isOwned = ownedItems.includes(item.id);
              const canAfford = certCoins >= item.cost;

              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-lg border transition-all ${
                    isOwned
                      ? "bg-primary/10 border-primary/30"
                      : canAfford
                      ? "bg-card border-primary/20 hover:border-primary/40"
                      : "bg-muted/30 border-muted opacity-60"
                  }`}
                >
                  <div className="text-4xl mb-3 text-center">{item.icon}</div>
                  <h3 className="font-bold text-center mb-2 text-foreground">{item.name}</h3>
                  <p className="text-xs text-muted-foreground text-center mb-3">
                    {item.description}
                  </p>
                  <div className="text-center mb-3">
                    <Badge variant="secondary">
                      {item.type}
                    </Badge>
                  </div>
                  {isOwned ? (
                    <Button className="w-full" disabled>
                      <Check className="w-4 h-4 mr-2" />
                      Owned
                    </Button>
                  ) : canAfford ? (
                    <Button
                      className="w-full gap-2"
                      onClick={() => handlePurchase(item.id, item.cost, item.name)}
                    >
                      <Coins className="w-4 h-4" />
                      {item.cost}
                    </Button>
                  ) : (
                    <Button className="w-full" disabled>
                      <Lock className="w-4 h-4 mr-2" />
                      {item.cost} Coins
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default RewardsShop;
